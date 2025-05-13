
import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface Feedback {
    id: number
    name: string
    avatarUrl: string | StaticImport
    testimonial: string
    role?: string
  }
  
  export const feedbackData: Feedback[] = [
    {
      id: 1,
      name: "Juliano S.",
      avatarUrl: "https://i.pravatar.cc/150?img=1",   
      testimonial: "O Butta Drop transformou minha pele! Antes era tão ressecada, agora está macia e hidratada o dia todo. O cheirinho é maravilhoso e a textura é perfeita, não fica pegajoso. Recomendo demais!",
      role: "Cliente Satisfeito"
    },
    {
      id: 2,
      name: "Carlos M.",
      avatarUrl: "https://i.pravatar.cc/150?img=14",
      testimonial: "Confesso que comprei para minha esposa, mas acabei usando também! Minha pele, principalmente nos cotovelos e joelhos, melhorou muito. Absorve rápido e a sensação de hidratação dura bastante.",
      role: "Usuário Surpreso"
    },
    {
      id: 3,
      name: "Fernando L.",
       avatarUrl: "https://i.pravatar.cc/150?img=60",
      testimonial: "Amei a composição natural do Butta Drop. Minha pele é sensível e ele foi super gentil, sem causar irritações. A hidratação é potente e duradoura. Virou meu queridinho!",
      role: "Pele Sensível Agradece"
    },
    {
      id: 4,
      name: "Rose P.",
       avatarUrl: "https://i.pravatar.cc/150?img=09",
      testimonial: "Excelente produto! A textura é rica, mas não oleosa. Deixa a pele com um viço bonito e muito macia. O resultado é visível em poucos dias de uso. Vale cada centavo.",
      role: "Fã de Carteirinha"
    },
    {
      id: 5,
      name: "Ana Beatriz G.",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
      testimonial: "Que descoberta incrível! O Butta Drop não só hidrata profundamente, como também deixou minha pele com uma aparência mais firme e luminosa. O aroma é suave e delicioso. Já indiquei para todas as amigas!",
      role: "Apaixonada por Butta Drop"
    }
  ];
  