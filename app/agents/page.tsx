import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FadeIn } from '@/components/ui/fade-in';

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white">
      <Navbar />
      <main className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h1 className="text-5xl font-bold mb-8">AI Agents</h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore our collection of vetted AI agents ready for production use. Designed to solve complex problems, automate tasks, and drive efficiency across industries, our AI agents are transforming the way Chhattisgarh works.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Agriculture',
                points: [
                  'Monitoring crop health through satellite imagery.',
                  'Predicting weather patterns to guide planting and harvesting.',
                  'Automating irrigation and pest control systems.',
                ],
              },
              {
                title: 'Healthcare',
                points: [
                  'Assisting doctors with diagnosis and treatment recommendations.',
                  'Managing patient data and scheduling.',
                  'Providing virtual health consultations.',
                ],
              },
              {
                title: 'Education',
                points: [
                  'Personalizing learning experiences for students.',
                  'Automating administrative tasks for educators.',
                  'Offering AI tutors for real-time assistance.',
                ],
              },
              {
                title: 'Business Operations',
                points: [
                  'Managing customer interactions through chatbots.',
                  'Analyzing market trends for strategic decisions.',
                  'Streamlining supply chain operations.',
                ],
              },
              {
                title: 'Public Infrastructure',
                points: [
                  'Monitoring traffic flow and optimizing urban planning.',
                  'Predicting maintenance needs for public utilities.',
                  'Enhancing public safety through real-time data analysis.',
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="bg-[#1A1C22] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <FadeIn>
              <h3 className="text-3xl font-bold mb-4">Why Choose Johaar for AI Agents?</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 max-w-3xl mx-auto">
                <li>
                  <span className="font-semibold text-white">Customized Solutions:</span> Every AI Agent we develop is tailored to meet the specific needs of your industry or project.
                </li>
                <li>
                  <span className="font-semibold text-white">Scalable Technology:</span> Our AI Agents grow with your business, adapting to new challenges and opportunities.
                </li>
                <li>
                  <span className="font-semibold text-white">Local Expertise:</span> We understand the unique challenges of Chhattisgarh and design AI solutions that address them effectively.
                </li>
              </ul>
            </FadeIn>
            <FadeIn>
              <a
                href="/contact"
                className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Us Today
              </a>
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
