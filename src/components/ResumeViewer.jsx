export default function ResumeViewer() {
  return (
    <div className="mt-8 border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
        <h2 className="text-sm font-semibold text-primary-text">My Resume</h2>
      </div>
      <div className="h-[600px] overflow-y-auto">
        <embed 
          src="/resume.pdf" 
          type="application/pdf" 
          width="100%" 
          height="100%" 
        />
      </div>
    </div>
  );
}
