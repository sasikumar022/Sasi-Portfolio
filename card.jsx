import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Calculator from "../img/calculator.jpg";
import Evolve from "../img/evolve.jpg";
import Port from "../img/port2.jpg";
import Todo from "../img/todo.jpg";
import ResumeBuilder from "../img/resume.jpg";

function CardRotate({ children, onSendToBack, sensitivity, width, height }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-90, 90], [20, -20]);
  const rotateY = useTransform(x, [-90, 90], [-20, 20]);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    }
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="absolute"
      style={{ x, y, rotateX, rotateY, width, height }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  sensitivity = 200,
  cardDimensions = { width: 320, height: 520 },
}) {
  const [cards, setCards] = useState([
    { id: 1, title: "Automating Business Analytics", description: "N8N-Automation connecting WhatsApp and ChatGPT to Google Sheets for instant,text business metric analysis and real-time reporting.", link: "#", img: Evolve },
    { id: 4, title: "Credit Card Fraud Risk Analysis", description: "Monitoring system that identifies fraudulent patterns, reducing institutional risk and enhancing customer trust.", link: "#", img: Port },
    { id: 2, title: "Coffee Sales Dashboard", description: "Interactive tracking of total revenue, profit margins and identify growth cycles.", 
      link: "https://www.linkedin.com/posts/sasikumar806_powerbi-powerbidashboard-powerbicommunity-ugcPost-7409939237426540544-UJhq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFdWEtgBlU090Babu-j4yrtYPeHZRZ35ngU", img: Calculator },
    { id: 3, title: "Tiruppur Textile Export Analytics Dashboard", 
      description: "A deep dive into the heart of India’s Knitting City.Using a Human-in-the-Loop AI workflow with Claude AI.", 
      link: "https://sasikumar022.github.io/Tiruppur-Textile-Dashboard/", img: ResumeBuilder },
  ]);

  const [dims, setDims] = useState(cardDimensions);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setDims({ width: 280, height: 480 });
      else setDims(cardDimensions);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cardDimensions]);

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((c) => c.id === id);
      const [card] = newCards.splice(index, 1);
      return [card, ...newCards]; // Move current card to the bottom of the stack
    });
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white overflow-hidden py-10">
      <div
        className="relative"
        style={{
          width: dims.width,
          height: dims.height,
          perspective: 1200,
        }}
      >
        {cards.map((card, index) => {
          const isTop = index === cards.length - 1;
          // Calculate rotation: Top card is 0, cards behind rotate more
          const fanRotation = isTop ? 0 : (cards.length - 1 - index) * 1;
          const xOffset = isTop ? 0 : (cards.length - 1 - index) * 12;

          return (
            <CardRotate
              key={card.id}
              onSendToBack={() => sendToBack(card.id)}
              sensitivity={sensitivity}
              width={dims.width}
              height={dims.height}
            >
              <motion.div
                className="rounded-[2rem] overflow-hidden border-[1px] border-white/50 bg-[#05070a] flex flex-col shadow-2xl"
                animate={{
                  rotateZ: fanRotation,
                  x: xOffset,
                  scale: isTop ? 1 : 0.98,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                style={{
                  width: dims.width,
                  height: dims.height,
                  transformOrigin: "bottom center", // Pivot from the bottom to create the fan effect
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[45%] object-cover pointer-events-none border-b border-white/10"
                />
                <div className="p-6 flex flex-col flex-grow bg-black">
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed flex-grow">
                    {card.description}
                  </p>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-lg font-medium mt-4 pb-2 border-b border-transparent hover:border-blue-300 w-fit"
                  >
                    Visit Project →
                  </a>
                </div>
              </motion.div>
            </CardRotate>
          );
        })}
      </div>
    </section>
  );
}