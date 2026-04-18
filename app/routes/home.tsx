import Navbar from "~/components/navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resume Analyzer" },
    { name: "description", content: "Welcome to your new dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />


    <section className="main-section">
      <div className="page-heading">
        <h1>Track your Application and Resume</h1>
        <h2>Review your submission and check your feedback</h2>
      </div>

      {resumes.length > 0 && ( // && vế >0 đúng, vế sau mới chạy
        <div className="resumes-section">
          {resumes.map((resume) => ( // map từ resumes từ cái kho constants ấy
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </section>




  </main>

}
