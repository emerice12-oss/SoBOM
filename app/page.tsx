import HeroSlider from "@/components/HeroSlider";
import UpcomingEvents from "@/components/UpcomingEvents";
import WeeklyScripture from "@/components/WeeklyScripture";
import CallToAction from "@/components/CallToAction";
import Link from "next/link";
import Image from "next/image";
import { homeLinks } from "@/data/homeLinks";
import { announcements } from "@/data/announcements";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <HeroSlider />

      {/* GRID SECTION */}
      <section className="container py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-deep-blue text-3xl md:text-4xl font-bold text-center mb-12">
          Explore SoBOM
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {homeLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative rounded-xl overflow-hidden shadow-lg shadow-black/70"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold group-hover:text-gold transition">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <WeeklyScripture />
      <UpcomingEvents />
      <CallToAction />

      <section className="mt-16">
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg shadow-black/70 max-w-6xl py-16 px-6 mx-auto">
          <h2 className="text-3xl font-bold text-deep-blue mb-8 text-center">
            Latest Announcements
          </h2>

          <div className="space-y-6 ">
            {announcements.map((item, index) => (
              <div key={index} className="border-l-4 border-gold pl-4">
                <h3 className="text-xl text-deep-blue font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-blue italic">{item.date}</p>
                <p className="mt-2 text-blue">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
