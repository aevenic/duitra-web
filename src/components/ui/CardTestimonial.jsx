import { Star } from 'lucide-react'

const CardTestimonial = ({ testimonial }) => {
  return (
    <div className="bg-neutral-800/60 p-4 border border-neutral-700/60 mb-4 flex-shrink-0 rounded-lg">
      {/* <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, idx) => (
          <Star key={idx} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        ))}
      </div> */}
      <p className="text-blue-200 font-semibold mb-6">"{testimonial.text}"</p>
      <div>
        <p className="text-neutral-200 text-[14px] font-semibold">{testimonial.name}</p>
        <p className="text-neutral-400 text-[13px] font-semibold">{testimonial.details}</p>
      </div>
    </div>
  )
}

export default CardTestimonial