export default function Team() {
  const teamMembers = [
    {
      name: "Alexandra Chen",
      role: "Managing Partner",
      bio: "Former executive at Goldman Sachs Private Equity. Previously founded and scaled two successful enterprise software companies with combined exits exceeding $500M."
    },
    {
      name: "Michael Sterling", 
      role: "Investment Partner",
      bio: "Former McKinsey & Company partner specializing in strategic communications. Led positioning strategies for Fortune 100 companies and unicorn startups."
    }
  ]

  return (
    <section id="team" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-24 text-center tracking-tight">
          Partnership
        </h2>

        <div className="grid md:grid-cols-2 gap-20 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-light text-gray-900 mb-3 tracking-wide">{member.name}</h3>
              <p className="text-gray-400 text-xs mb-6 font-light tracking-widest uppercase">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed font-light">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}