"use client"

import { animate, motion, type MotionValue, useMotionValue, useMotionValueEvent, useScroll } from "motion/react"
import { useRef } from "react"
import { User, Star } from "lucide-react"

export default function TestimonialsScroll() {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  const maskImage = useScrollOverflowMask(scrollXProgress)

  // Testimonial data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Inc.",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "This product has completely transformed how our team collaborates. The intuitive interface and powerful features have boosted our productivity by 40%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      company: "InnovateSoft",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "As a developer, I appreciate the clean architecture and robust API. Integration was seamless, and the documentation is exceptional.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "GrowthLabs",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "We've tried many similar solutions, but this one stands out for its reliability and customer support. Our team adopted it within days.",
      rating: 4,
    },
    {
      name: "David Williams",
      role: "CEO",
      company: "StartupVision",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "This platform has been instrumental in our company's growth. The analytics features provide insights that have directly impacted our strategy.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "UX Designer",
      company: "DesignForward",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The attention to detail in this product is remarkable. As a designer, I appreciate the thoughtful user experience and consistent interface.",
      rating: 5,
    },
    {
      name: "James Thompson",
      role: "Operations Manager",
      company: "LogisticsPro",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Implementation was quick and the ROI was evident within the first month. Our operational efficiency has improved significantly.",
      rating: 4,
    },
  ]

  return (
    <div id="testimonials-section">
      <h2 className="section-title">What Our Clients Say</h2>

      <div className="testimonials-container">
        <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle cx="50" cy="50" r="30" className="indicator" style={{ pathLength: scrollXProgress }} />
        </svg>

        <motion.ul ref={ref} style={{ maskImage }} className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="testimonial-card" style={{ background: `var(--layer)` }}>
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {testimonial.image ? (
                    <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                  ) : (
                    <div className="avatar-placeholder">
                      <User size={32} />
                    </div>
                  )}
                </div>
                <div className="testimonial-author">
                  <h3>{testimonial.name}</h3>
                  <p className="role">{testimonial.role}</p>
                  <p className="company">{testimonial.company}</p>
                </div>
              </div>

             <div className="testimonial-rating group">
  {[...Array(5)].map((_, i) => (
    <Star
      key={i}
      size={16}
      fill={i < testimonial.rating ? "#D4AF37" : "transparent"}
      color={i < testimonial.rating ? "#D4AF37" : "#C5A23D"}
      className="transition-colors duration-300 group-hover:scale-110"
    />
                ))}
              </div>

              <blockquote>
                <p>&quot;{testimonial.quote}&quot;</p>
              </blockquote>
            </li>
          ))}
        </motion.ul>
      </div>

      <StyleSheet />
    </div>
  )
}

const left = `0%`
const right = `100%`
const leftInset = `20%`
const rightInset = `80%`
const transparent = `#0000`
const opaque = `#000`
function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`,
  )

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`,
      )
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`,
      )
    } else if (scrollXProgress.getPrevious() === 0 || scrollXProgress.getPrevious() === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`,
      )
    }
  })

  return maskImage
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`
      #testimonials-section {
        width: 100%;
        max-width: 1200px;
        padding: 60px 20px;
        margin: 0 auto;
        position: relative;
      }

      .section-title {
        font-size: 2.5rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 40px;
        color: var(--white);
      }

      .testimonials-container {
        position: relative;
        width: 100%;
      }

      #progress {
        position: absolute;
        top: -40px;
        right: 20px;
        transform: rotate(-90deg);
        z-index: 10;
      }

      .bg {
        stroke: var(--layer);
      }

      #progress circle {
        stroke-dashoffset: 0;
        stroke-width: 10%;
        fill: none;
      }

      #progress .indicator {
        stroke: #c5fb45;
      }

      .testimonials-list {
        display: flex;
        list-style: none;
        overflow-x: scroll;
        overflow-y: hidden;
        padding: 20px 0;
        margin: 0 auto;
        gap: 30px;
        scroll-behavior: smooth;
      }

      ::-webkit-scrollbar {
        height: 5px;
        width: 5px;
        background: #fff3;
        -webkit-border-radius: 1ex;
      }

      ::-webkit-scrollbar-thumb {
        background: var(--accent);
        -webkit-border-radius: 1ex;
      }

      ::-webkit-scrollbar-corner {
        background: #fff3;
      }

      .testimonial-card {
        flex: 0 0 380px;
        background: var(--layer);
        border-radius: 16px;
        overflow: hidden;
        padding: 30px;
        display: flex;
        flex-direction: column;
        border: 1px solid var(--border);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        height: auto;
        min-height: 300px;
      }

      .testimonial-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }

      .testimonial-header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
      }

      .testimonial-avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(197, 251, 69, 0.1); /* Using your color with 10% opacity */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  border: 2px solid #c5fb45;
  transition: all 0.3s ease;
}

      .testimonial-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .avatar-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: var(--accent);
      }

      .testimonial-author h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0 0 5px 0;
        color: var(--white);
      }

      .testimonial-author .role {
        font-size: 0.9rem;
        color: #c5fb45;
        margin: 0 0 3px 0;
      }

      .testimonial-author .company {
        font-size: 0.85rem;
        color: var(--white-feint);
        margin: 0;
      }

      .testimonial-rating {
        display: flex;
        gap: 5px;
        margin-bottom: 20px;
      }

      blockquote {
        flex: 1;
        margin: 0;
        padding: 0;
        font-style: italic;
        position: relative;
      }

      blockquote p {
        font-size: 1rem;
        line-height: 1.6;
        color: var(--white);
      }

      blockquote::before {
        content: """;
        font-size: 4rem;
        position: absolute;
        left: -10px;
        top: -30px;
        color: var(--accent-transparent);
        font-family: serif;
      }

      @media (max-width: 768px) {
        .testimonial-card {
          flex: 0 0 300px;
          padding: 20px;
        }
        
        .section-title {
          font-size: 2rem;
        }
      }
    `}</style>
  )
}
