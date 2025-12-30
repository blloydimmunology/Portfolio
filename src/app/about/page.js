import TopBanner from '@/components/TopBanner';
import Footer from '@/components/Footer';
import ResumeViewer from '@/components/ResumeViewer';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: "Bryce's Journal",
  description: `About ${siteConfig.title}`,
};

export default function AboutPage() {
  return (
    <>
      <TopBanner />

      <main className="max-w-[680px] mx-auto px-6 py-16">
        <article>
          <h1 className="text-4xl font-semibold text-primary-text mb-6 font-serif text-center" style={{ lineHeight: '1.3' }}>
            About The Author
          </h1>

          <div className="space-y-6 text-base text-primary-text text-center" style={{ lineHeight: '1.7' }}>
            <p>
              I'm Bryce Lloyd, a senior at Johns Hopkins University.
              I have a strong interest in immunology and immunotherapy
              triggered by some incredible lab experiences in CAR-T
              and CAR-NK cell therapies.

            </p>
            <p>
              In the summer of 2024, I worked at AstraZeneca in their CAR-T process development group.
              Then, in my junior year I joined the lab of Dr. Denis Wirtz, assisting a graduate
              student with their research on Velocity Receptors in cancer metastasis.
              In the summer of 2025, I worked with CAR-NK cell therapy in the immunometabolism group in the lab of
              Dr. Katy Rezvani at MD Anderson Cancer Center, where I ran my own project. Now, in my senior year in the Wirtz Lab, I am
              co-leading a project investigating the potential of a novel CAR-T therapy for an autoimmune disease (shh... its secret).
              I plan to return to the Rezvani lab after graduating for a gap year, where I will continue my project from Summer 2025.
            </p>
            <p>
              These experiences have shaped my true passion for science and research.
              The process of utilizing background science to form a hypothesis, planning
              out experiments to test that hypothesis, and then analyzing and presenting
              the results, is something that I have developed a true passion for. Because of this,
              I plan to pursue an MD or MD/PhD afer graduating, with the goal of not only
              treating patients, but making significant contributions to the advancement of
              today's standard of care.
            </p>
            <p>
              In science, I now recognize the importance of staying up to date
              with relevant journal articles about your field. In order to form
              hypotheses for a current project, you must thoroughly understand what
              other groups have done or are doing to possibly address a similar question.
            </p>
            <p>
              In this blog, I want to provide my own interpretation of published
              research in my fields of interest: immunology, immunotherapy, and oncology.
              By breaking down complex ideas and experiments, I hope to make
              my own learning more effective as well as practice communicating complicated
              information to wider audiences in a simple and digestible manner.
              Therefore, my writing will be relatively casual, and will take a more
              pedagogical and interpretive approach to scientific research.
            </p>
            <p>
              Although this is mostly about science research, I am interested in a lot
              of other things that you will see in the blog. I hope you enjoy!
            </p>
            
            <p>
              My resume is attached below if you would like to learn more about me:
            </p>
            <ResumeViewer />
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
