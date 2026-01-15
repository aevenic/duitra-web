import { Star } from 'lucide-react'

const CardTestimonial = ({ testimonial }) => {
  return (
    <div className="bg-neutral-800 p-5 border border-neutral-700/60 mb-4 flex-shrink-0 rounded-lg">
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, idx) => (
          <Star key={idx} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        ))}
      </div>
      <p className="text-neutral-200 mb-6">"{testimonial.text}"</p>
      <div>
        <p className="text-neutral-200">{testimonial.name}</p>
        <p className="text-neutral-400 text-[14px] font-semibold">{testimonial.details}</p>
      </div>
    </div>
  )
}

export default CardTestimonial