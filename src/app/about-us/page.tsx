
import KeyMilestones from "@/components/AboutUs/KeyMilestones"
import AboutHero from "@/components/AboutUs/AboutHero"
import Whatwedo from "@/components/AboutUs/Whatwedo"
import OurValues from "@/components/AboutUs/OurValues"
import TrustSection from "@/components/AboutUs/TrustSection"
import LeadershipTeam from "@/components/AboutUs/LeadershipSection"
import DivisionManagers from "@/components/AboutUs/divisionManagers"
import GlobalTalentReach from "@/components/AboutUs/GlobalTalentReach"
import AffiliationsAwards from "@/components/AboutUs/AffiliationsAwards"

export default function AboutUsPage() {
  return (
    <main className="">
        <AboutHero />
        <KeyMilestones />
        <Whatwedo />
        <OurValues />
        <TrustSection/>
        <LeadershipTeam />
        <DivisionManagers />
        <GlobalTalentReach />
        <AffiliationsAwards />
    </main>
  )
}
