import Link from "next/link";


const blocks = [
  {
    "title": "title",
    "image": "image/path",
    "description": " a little site thats magic",
    "url": "www.google.com"
  }, {
    "title": "title",
    "image": "image/path",
    "description": " a little site thats magic",
    "url": "www.google.com"
  }, {
    "title": "title",
    "image": "image/path",
    "description": " a little site thats magic",
    "url": "www.google.com"
  }, {
    "title": "title",
    "image": "image/path",
    "description": " a little site thats magic",
    "url": "www.google.com"
  },


];

export default function HomePage() {
  return (
    <main className="">
      <div className="  grid gap-4 grid-cols-3 grid-rows-3">
        {blocks.map((block, index) => (
          <div key={index}>
            <div key={index + "inner"}>{block.title}</div>
          </div>
        ))}
      </div>
      Hello (Profile Page in progress)
    </main>
  );
}
