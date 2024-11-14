import ExampleClientComponent from "@/components/ExampleClientComponent";
import ExampleServerComponent from "@/components/ExampleServerComponent";

export default function Home() {
  return (
    <main className="bg-gray-300 p-5">
      <p>1. This text is in a server component (page)</p>

      <ExampleClientComponent>
        <ExampleServerComponent></ExampleServerComponent>
      </ExampleClientComponent>
    </main>
  );
}
