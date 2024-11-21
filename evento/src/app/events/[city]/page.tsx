import H1 from "@/components/H1";
import EventsList from "@/components/EventsList";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";

type Props = {
  params: {
    city: string;
  };
};

type EventPageProps = Props & {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  return {
    title:
      city === "all"
        ? "All Events"
        : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`,
  };
}

export default async function EventsPage({
  params,
  searchParams,
}: EventPageProps) {
  const { city } = await params;
  const page = (await searchParams.page) || 1;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense fallback={<Loading></Loading>}>
        <EventsList city={city} page={+page} />
      </Suspense>
    </main>
  );
}
