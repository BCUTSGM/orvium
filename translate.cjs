const axios = require('axios');
const fs = require('fs');
const path = require('path');

const sourceLanguage = 'es';
const targetLanguages = [
    'ar', 'az', 'bg', 'bn', 'ca', 'cs', 'da', 'de', 'el', 'en', 'eo', 'et', 'eu',
    'fa', 'fi', 'fr', 'ga', 'gl', 'he', 'hi', 'hu', 'id', 'it', 'ja', 'ko', 'ky',
    'lt', 'lv', 'ms', 'nb', 'nl', 'pt-BR', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sq',
    'sv', 'th', 'tl', 'tr', 'uk', 'ur', 'zh-Hans', 'zh-Hant'
];
const sourceFile = path.join(__dirname, 'src', 'locales', 'es.json');
const outputDir = path.join(__dirname, 'src', 'locales');
const libreTranslateUrl = 'http://localhost:5000/translate'; // URL del servicio LibreTranslate

// Detectar si el texto está completamente en mayúsculas
function isAllUpperCase(text) {
    return text === text.toUpperCase() && /[A-ZÁÉÍÓÚÑÜ]/.test(text);
}

// Eliminar acentos del texto (acentos, diéresis, etc.)
function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

async function translateText(text, targetLanguage) {
    try {
        let originalText = text;
        let modifiedText = text;

        // Si el texto está completamente en mayúsculas, convertir a minúsculas
        if (isAllUpperCase(modifiedText)) {
            modifiedText = modifiedText.toLowerCase();
        }

        // Eliminar acentos
        modifiedText = removeAccents(modifiedText);

        const response = await axios.post(
            libreTranslateUrl,
            {
                q: modifiedText,
                source: sourceLanguage,
                target: targetLanguage,
                format: 'text'
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        );

        const translated = response.data.translatedText;

        if (translated.trim() === modifiedText.trim()) {
            console.warn(`⚠️ Aviso: "${originalText}" → "${translated}" (sin cambios)`);
        }

        return translated;

    } catch (error) {
        console.error(`ERROR: No se pudo traducir "${text}" a ${targetLanguage}.`, error.message);
        throw error;
    }
}

// Traducción recursiva
async function translateObject(obj, targetLanguage) {
    if (typeof obj === 'string') {
        return await translateText(obj, targetLanguage);
    } else if (Array.isArray(obj)) {
        const translatedArray = [];
        for (const item of obj) {
            translatedArray.push(await translateObject(item, targetLanguage));
        }
        return translatedArray;
    } else if (typeof obj === 'object' && obj !== null) {
        const translatedObj = {};
        for (const key of Object.keys(obj)) {
            translatedObj[key] = await translateObject(obj[key], targetLanguage);
        }
        return translatedObj;
    } else {
        return obj;
    }
}

async function generateTranslations() {
    const sourceContent = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));
    console.log(`Iniciando traducción para archivo fuente...`);

    for (const lang of targetLanguages) {
        try {
            console.log(`\n--- Generando para el idioma: ${lang.toUpperCase()} ---`);

            const translatedContent = await translateObject(sourceContent, lang);

            const safeLang = lang.replace(/-/g, '_');
            const outputFile = path.join(outputDir, `${safeLang}.json`);
            fs.writeFileSync(outputFile, JSON.stringify(translatedContent, null, 2), 'utf8');

            console.log(`✅ Archivo ${outputFile} generado correctamente.`);
        } catch (error) {
            console.warn(`⚠️ Traducción para idioma ${lang.toUpperCase()} omitida debido a error: ${error.message}`);
        }
    }
}

generateTranslations();
