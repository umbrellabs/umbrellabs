import { SectionReveal } from '@/components/ui/SectionReveal';

interface DomainItem {
  num: string;
  title: string;
  desc: string;
  tags: string[];
}

const domains: DomainItem[] = [
  {
    num: '01',
    title: 'Full Web Applications',
    desc: 'Full-stack web application development with modern technologies.',
    tags: ['React', 'Next.js', 'Node.js', 'Supabase', 'TypeScript'],
  },
  {
    num: '02',
    title: 'Telegram Automation Systems',
    desc: 'Automated Telegram workflows for notifications, moderation, and CRM-style flows.',
    tags: ['Node.js', 'Telegram API', 'TypeScript'],
  },
  {
    num: '03',
    title: 'Cross Platform Mobile Applications',
    desc: 'A performant mobile product built for Android and iOS with shared code architecture.',
    tags: ['React Native', 'Expo', 'Supabase'],
  },
  {
    num: '04',
    title: 'Desktop Products',
    desc: 'Cross-platform desktop software with Tauri, delivering native performance and seamless user experience.',
    tags: ['Tauri', 'Cross-Platform', 'Desktop Development'],
  },
];

export function Portfolio() {
  return (
    <section id="projects" className="section bg-bg">
      <div className="section-inner">
        <SectionReveal>
          <div className="section-label">DOMAINS</div>
          <h2 className="section-title mb-8">
            What we <span className="text-primary font-bold">build</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {domains.map((item, idx) => (
            <SectionReveal key={item.num} delay={0.08 * idx}>
              <div className="card p-6 flex flex-col justify-between h-full min-h-[180px] rounded-lg">
                <div>
                  <div className="mb-3 font-mono text-[0.6rem] text-text-muted tracking-[0.1em]">
                    [{item.num}]
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-[0.82rem] leading-[1.65] mb-4">
                    {item.desc}
                  </p>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.55rem] tracking-[0.08em] uppercase px-2 py-1 border border-border text-text-muted bg-white/[0.01]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
