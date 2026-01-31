import { Stack, Chip } from "@mui/material";

export default function Hero() {
  return (
    <section className="bg-[#3b5d50] text-white">
      <div className="max-w-1200px mx-auto px-30 py-60px grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-6xl font-bold leading-tight">
            Modern Interior <br /> Design Studio
          </h1>

          <p className="text-lg mt-5 opacity-70 max-w-450px">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>

          <Stack direction="row" spacing={2} className="mt-8">
            <Chip
              label="Shop Now"
              clickable
              size="Large"
              sx={{ fontSize: "20px", p: "8px", bgcolor: "#ffeb3b" }}
            />
            <Chip
              label="Explore"
              variant="outlined"
              size="Large"
              clickable
              sx={{
                color: "white",
                borderColor: "white",
                fontSize: "20px",
                p: "8px",
              }}
            />
          </Stack>
        </div>

        <div>
          <img
            src="https://themewagon.github.io/furni/images/couch.png"
            alt="Sofa"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
