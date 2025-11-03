import { Box } from "@mui/material";
import test1 from "../assets/cambiarImagen.PNG";
import test2 from "../assets/test.gif.mp4";
import test3 from "../assets/testmp42.mp4"

export default function Test() {
  return (
    <Box>
      {/* Imagen de fondo */}
      <Box
        sx={{
          backgroundImage: `url(${test1})`,
          backgroundSize: { xs: "cover", sm: "contain" },
          backgroundPosition: "center",
          width: "100%",
          minHeight: { xs: "30vh", sm: "45vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>

      {/* Video */}
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "30vh", sm: "45vh" },
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="video"
          src={test2}
          alt="GIF animado"
          sx={{
            width: { xs: "80%", sm: "50%", md: "30%" },
            maxWidth: "600px",
            minHeight: { xs: "auto", sm: "45vh" },
          }}
          {...(test2.endsWith(".mp4")
            ? { autoPlay: true, loop: true, muted: true, playsInline: true }
            : {})}
        />
      </Box>
      {/* Video2 */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb:2
        }}
      >
        <Box
          component="video"
          src={test3}
          alt="Video"
          sx={{
            width: { xs: "80%", sm: "50%", md: "30%" },
            maxWidth: "600px",
          }}
          {...(test2.endsWith(".mp4")
            ? { autoPlay: true, loop: true, muted: true, playsInline: true }
            : {})}
        />
      </Box>
    </Box>
  );
}