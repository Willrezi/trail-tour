import React from "react"
import { FaHiking, FaRunning, FaBiking } from "react-icons/fa"

const OfferIcons = [
  {
    icon: <FaHiking />,
    title: "Randonnée",
    key: 1,
    text:
      "Le Haut-Doubs, en plein cœur des Montagnes du Jura et aux portes de la Suisse, est le point de départ idéal pour des balades aux vues à couper le souffle et le terrain de jeu rêvé pour les amateurs de grande randonnée.",
  },
  {
    icon: <FaRunning />,
    title: "Trail Running",
    key: 2,
    text:
      "En plein cœur des Montagnes du Jura, le Pays du Haut-Doubs est un terrain de jeu idéal pour le Trail Running, cette discipline qui allie effort, dépassement de soi et contemplation. Si vous aimez découvrir les paysages à petites ou grandes foulées, vous ne serez pas déçus. Choisi en fonction de vos attentes et vos envies, chaque circuit vous offrira son lot de sensations.",
  },
  {
    icon: <FaBiking />,
    title: "VTT",
    key: 3,
    text:
      "Partez à la découverte de la faune : chamois, chevreuils, lièvres ... et de la flore : gentiane jaune ou bleue, lys martagon ... de nos Montagnes du Jura en VTT !",
  },
]

export default OfferIcons
