
import InsightCard from './InsightCard';
import KnowledgeSection from './KnowledgeSection';

export default function InsightsSection() {
  const insights = [
    { title: 'Fundamentals', status: 'Available', available: true },
    { title: 'Fundamentals', status: 'Not available', available: false },
    { title: 'Fundamentals', status: 'Available', available: true }
  ];

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-6">Sharkbid Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {insights.map((insight, index) => (
          <InsightCard key={index} insight={insight} />
        ))}
      </div>
      <KnowledgeSection />
    </div>
  );
}