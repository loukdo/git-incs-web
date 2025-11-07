export default function CTA() {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-r from-[#FF6B35] to-[#FB923C] -mx-5">
      <div className="max-w-8xl mx-auto px-4 md:px-10 lg:px-32 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
          Ready to Transform Your Business?
        </h2>

        {/* CTA Button */}
        <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
