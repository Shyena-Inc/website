
const StatsSection = () => {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-cyber-purple">10K+</div>
            <p className="text-white/70">Active Platform Users</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-cyber-purple">500+</div>
            <p className="text-white/70">Security Assessments</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-cyber-purple">50+</div>
            <p className="text-white/70">Open Source Projects</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-cyber-purple">99%</div>
            <p className="text-white/70">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
