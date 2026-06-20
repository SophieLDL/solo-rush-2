import "../components/tiltCard.css"
import { useRef, useState } from "react";
import type { ReactNode } from "react";

interface TiltCardProps {
    children: ReactNode;
}

function TiltCard({ children }: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 12;
        const rotateX = -((y - centerY) / centerY) * 12;

        setRotate({ x: rotateX, y: rotateY });

        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        setGlarePos({ x: glareX, y: glareY });
    }

    function handleMouseLeave() {
        setRotate({ x: 0, y: 0 });
        setGlarePos({ x: 50, y: 50 });
    }

    return (
        <div className="tilt-wrapper">
            <div
                ref={cardRef}
                className="tilt-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                }}
            >
                {children}
                <div
                    className="tilt-glare"
                    style={{
                        background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.35), transparent 60%)`,
                    }}
                />
            </div>
        </div>
    );
}

export default TiltCard;