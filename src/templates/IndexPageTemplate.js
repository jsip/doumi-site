import React from "react"
import { Link } from "gatsby"
import { SectionHeading, TextImageSplit } from "../components/Sections"
import { PrimaryButton, SecondaryButton } from "../components/Buttons"
import { Container, CardSet } from "../components/Sections"
import Image from "../components/Image"

const IndexPageTemplate = ({
  heading,
  subheading,
  image,
  posts = [],
  about,
}) => {
  return (
    <div>
      <svg style={{position: "absolute", width: 0, height: 0, overflow: "hidden"}} version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <symbol id="icon-facebook" viewBox="-4 -4 32 32" fill="#fff">
            <title>facebook</title>
            <path d="M12 0.48c-6.362 0-11.52 5.158-11.52 11.52s5.158 11.52 11.52 11.52 11.52-5.158 11.52-11.52-5.158-11.52-11.52-11.52zM14.729 8.441h-1.732c-0.205 0-0.433 0.27-0.433 0.629v1.25h2.166l-0.328 1.783h-1.838v5.353h-2.044v-5.353h-1.854v-1.783h1.854v-1.049c0-1.505 1.044-2.728 2.477-2.728h1.732v1.897z"/>
          </symbol>
          <symbol id="icon-linkedin" viewBox="-4 -4 32 32" fill="#fff">
            <title>linkedin</title>
            <path d="M12 0.48c-6.362 0-11.52 5.158-11.52 11.52s5.158 11.52 11.52 11.52 11.52-5.158 11.52-11.52-5.158-11.52-11.52-11.52zM9.18 16.775h-2.333v-7.507h2.333v7.507zM7.999 8.346c-0.737 0-1.213-0.522-1.213-1.168 0-0.659 0.491-1.165 1.243-1.165s1.213 0.506 1.228 1.165c0 0.646-0.475 1.168-1.258 1.168zM17.7 16.775h-2.333v-4.16c0-0.968-0.338-1.626-1.182-1.626-0.644 0-1.027 0.445-1.196 0.874-0.062 0.152-0.078 0.368-0.078 0.583v4.328h-2.334v-5.112c0-0.937-0.030-1.721-0.061-2.395h2.027l0.107 1.043h0.047c0.307-0.49 1.060-1.212 2.318-1.212 1.535 0 2.686 1.028 2.686 3.239v4.439z"/>
          </symbol>
          <symbol id="icon-email" viewBox="-4 -4 32 32" fill="#fff">
            <title>email</title>
            <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm5.964,8.063L12.2,12.871a0.419,0.419,0,0,1-.391,0L6.036,8.063H17.964ZM5.2,8.724l4.084,3.4L5.2,15.293V8.724Zm0.87,7.213L10.1,12.8l1.044,0.866a1.341,1.341,0,0,0,1.718,0L13.9,12.8l4.027,3.133H6.07Zm12.73-.644-4.084-3.17,4.084-3.4v6.569Z"/>
          </symbol>
          <symbol id="icon-phone" viewBox="-4 -4 32 32" fill="#fff">
            <title>phone</title>
            <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm6,15.47a.58.58,0,0,1-.178.509l-1.69,1.678a.968.968,0,0,1-.3.216,1.251,1.251,0,0,1-.362.114c-.009,0-.034,0-.077.007s-.1.006-.165.006a5.653,5.653,0,0,1-2.1-.489,11.2,11.2,0,0,1-1.773-.973,13.188,13.188,0,0,1-2.11-1.78,13.977,13.977,0,0,1-1.475-1.677A12.061,12.061,0,0,1,6.824,11.6a7.983,7.983,0,0,1-.533-1.233,6.473,6.473,0,0,1-.242-.954A3.217,3.217,0,0,1,6,8.784c.009-.153.013-.237.013-.254a1.247,1.247,0,0,1,.114-.363.967.967,0,0,1,.216-.3L8.032,6.178A.559.559,0,0,1,8.439,6a.475.475,0,0,1,.292.095.872.872,0,0,1,.216.236l1.361,2.58a.62.62,0,0,1,.063.445.794.794,0,0,1-.216.407l-.623.623a.2.2,0,0,0-.044.082.3.3,0,0,0-.019.1,2.282,2.282,0,0,0,.228.61,5.635,5.635,0,0,0,.471.743,8.171,8.171,0,0,0,.9,1.011,8.494,8.494,0,0,0,1.017.909,5.962,5.962,0,0,0,.744.477,2.011,2.011,0,0,0,.457.184l.159.032a.332.332,0,0,0,.083-.019.219.219,0,0,0,.083-.045l.724-.737a.779.779,0,0,1,.534-.2.66.66,0,0,1,.343.077h.013l2.453,1.449A.64.64,0,0,1,18,15.47Z"/>
          </symbol>
          <symbol id="icon-blog" viewBox="-4 -4 32 32" fill="#fff">
            <title>blog</title>
            <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM9.083,17H7V14.917l6.146-6.146,2.083,2.083Zm7.76-7.76-1.016,1.016L13.745,8.172,14.76,7.156a0.566,0.566,0,0,1,.781,0l1.3,1.3A0.566,0.566,0,0,1,16.844,9.24Z"/>
          </symbol>
        </defs>
      </svg>
      {/* Header */}
      <div className="relative bg-green-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pt-24 pb-12 bg-green-600 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 lg:w-1/2 lg:pt-44 lg:pb-24 xl:pt-48 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-green-600 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative z-20 mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-md mx-auto lg:max-w-lg lg:mx-0 lg:text-left">
                <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  {heading}
                </h1>
                <p className="mt-2 text-green-100 sm:mt-4 lg:mt-6 lg:text-xl">
                  {subheading}
                </p>
                <div className="flex flex-wrap gap-x-6 mt-6 lg:mt-10 items-center">
                  <PrimaryButton to="/contact">
                    Contactez-nous
                  </PrimaryButton>
                  <div className="flex gap-x-6">
                    <div className="icon-wrap border-l-2 border-green-600 hover:border-white">
                      <Link target="_blank" className="text-white no-underline" to="https://www.linkedin.com/in/j%C3%A9r%C3%A9miedumas/">
                        <svg className="icon-bar-svg">
                          <use xlinkHref="#icon-linkedin" />
                        </svg>
                      </Link>
                    </div>
                    <div className="icon-wrap border-l-2 border-green-600 hover:border-white">
                      <Link target="_blank" className="text-white no-underline" to="mailto:jeremie.dumas@manulifesecurities.ca">
                        <svg className="icon-bar-svg">
                          <use xlinkHref="#icon-email" />
                        </svg>
                      </Link>
                    </div>
                    <div className="icon-wrap border-l-2 border-green-600 hover:border-white">
                      <Link target="_blank" className="text-white no-underline" to="tel:5819895664">
                        <svg className="icon-bar-svg">
                          <use xlinkHref="#icon-phone" />
                        </svg>
                      </Link>
                    </div>
                    <div className="icon-wrap border-l-2 border-green-600 hover:border-white">
                      <Link target="_blank" className="text-white no-underline" to="https://www.linkedin.com/newsletters/revue-boursi%25C3%25A8re-diligence-6943216235245355008/">
                        <svg className="icon-bar-svg">
                          <use xlinkHref="#icon-blog" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <iframe
            src={"https://static.twentyoverten.com/5ce42945f427fa41b9b99d37/y3Mxouuw8-/Forest-9796.mp4"}
            title="bg video for page"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            style={{ width: "100%", height: "100%", transform: "scale(2)" }}
          />
        </div>
      </div>

      {/* Featured projects */}
      <Container>
        <div className="flex justify-between items-baseline">
          <SectionHeading>Pourquoi travailler avec nous?</SectionHeading>
        </div>
        <div className="mt-8">
          <CardSet posts={posts} />
        </div>
      </Container>

      {/* About section */}
      <TextImageSplit image={about.image}>
        <SectionHeading>{about.heading}</SectionHeading>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {about.description}
        </p>
        <SecondaryButton to={about.button.url} className="mt-6 lg:mt-10">
          {about.button.label}
        </SecondaryButton>
      </TextImageSplit>

      <div className="m-auto text-center mt-8 max-w-4xl">
        <p className="text-gray-400 dark:text-gray-300">
          Grâce à la solidité et à la sécurité d'envergure mondiale de manuvie, vous bénéficiez des ressources et de l'expertise d'une société digne de confiance offrant des solutions d'assurance vie, d'assurance maladie et de gestion de patrimoine.
        </p>
      </div>
      <hr className="my-12 text-gray-300 max-w-5xl m-auto" />
    </div>
  )
}

export default IndexPageTemplate
