export default function Home() {
  const setNewView = async () => {
    console.log("SEt new view");
  };

  setNewView();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  );
}
