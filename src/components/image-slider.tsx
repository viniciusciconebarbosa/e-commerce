"use client";

import { useState, useEffect } from "react";
import { useTheme, Skeleton } from "@mui/material";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const SlideImage = styled.div<{ $active: boolean; $url: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$url});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition: opacity 1.5s ease-in-out;
  z-index: ${(props) => (props.$active ? 1 : 0)};
`;

const SlideContent = styled.div<{ $active: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 40px;
  color: white;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transform: translateY(${(props) => (props.$active ? "0" : "20px")});
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
  z-index: 2;
`;

const SlideIndicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 3;
`;

const Indicator = styled.div<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$active ? "white" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    title: "Descubra nossa última coleção",
    description: "Explore produtos premium projetados para seu estilo de vida",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    title: "Produtos de qualidade para clientes satisfeitos",
    description: "Junte-se a milhares de clientes satisfeitos em todo o mundo",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    title: "Promoção Exclusiva de Verão",
    description:
      "Ganhe até 50% de desconto em itens selecionados nesta temporada",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    title: "Feito com Paixão e Cuidado",
    description: "Cada produto conta uma história de qualidade e dedicação",
  },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false); // Estado para controlar o carregamento das imagens
  const theme = useTheme();

  // Verifica se todas as imagens foram carregadas
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true); // Todas as imagens foram carregadas
      } catch (error) {
        console.error("Erro ao carregar imagens:", error);
      }
    };

    loadImages();
  }, []);

  // Intervalo para troca de slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {imagesLoaded ? (
        <SliderContainer>
          {/* Exibe o Skeleton enquanto as imagens não estão carregadas */}
          {!imagesLoaded && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              sx={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
            />
          )}

          {/* Exibe as imagens após o carregamento */}
          {slides.map((slide, index) => (
            <SlideImage
              key={slide.id}
              $active={index === currentSlide}
              $url={slide.image}
            />
          ))}

          {/* Exibe o conteúdo dos slides apenas após o carregamento das imagens */}
          {imagesLoaded &&
            slides.map((slide, index) => (
              <SlideContent key={slide.id} $active={index === currentSlide}>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  {slide.title}
                </h2>
                <p
                  style={{
                    fontSize: "1.25rem",
                    maxWidth: "600px",
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  {slide.description}
                </p>
              </SlideContent>
            ))}

          {/* Exibe os indicadores de slide apenas após o carregamento das imagens */}
          {imagesLoaded && (
            <SlideIndicators>
              {slides.map((_, index) => (
                <Indicator
                  key={index}
                  $active={index === currentSlide}
                  onClick={() => handleIndicatorClick(index)}
                />
              ))}
            </SlideIndicators>
          )}
        </SliderContainer>
      ) : (
        <Skeleton
          variant="rectangular"
          width="80vw"
          height="70vh"
          sx={{ margin: "5px 7%" }}
        />
      )}
    </>
  );
}
