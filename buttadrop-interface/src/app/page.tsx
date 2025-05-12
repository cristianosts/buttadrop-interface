import { Hero } from "./_components/sectionHero";
import { Composition } from "./_components/sectionComposition";
import { Meeting } from "./_components/sectionMeeting";
import { CompositionData } from "./types/composition";
import { ShowFeedback } from "./_components/sectionFeedback";
import { feedbackData } from "./types/Feedback";
import { Footer } from "./_components/sectionFooter";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Meeting/>
      <Composition data={ CompositionData }/>
      <ShowFeedback data={ feedbackData }/>
      <Footer/>
    </main>
  )
}