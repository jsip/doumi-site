import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer style={{backgroundColor: '#022B3A'}} className="pb-8">
      <div className="pb-4">
        <div className="lg:flex">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10866.225975820258!2d-71.2884495302246!3d46.842839899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb897ddc2cec043%3A0xd450d4d0da014cc8!2s725%20Bd%20Lebourgneuf%2C%20Qu%C3%A9bec%2C%20QC%20G2J%201S1!5e1!3m2!1sen!2sca!4v1669578617187!5m2!1sen!2sca" height="400" style={{border: '0', width: "100%"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="mb-4 bg-green-600">
          <div className="flex gap-x-6 justify-between max-w-4xl m-auto p-6">
            <a href="https://www.ocrcvm.ca/" target="_blank">
              <StaticImage src="https://static.twentyoverten.com/5b6c40e420726c57d29b423f/ymgvsWt1vv/IIROC-fr.png" alt="IIROC logo" className="disclaimer-logo" style={{ width: '225' + 'px', height: '45' + 'px' }}/>
            </a>
            <a href="https://www.ocrcvm.ca/sections/investisseurs/choisir-un-conseiller-en-placement/rapport-info-conseiller" rel="noopener noreferrer" target="_blank">
              <StaticImage src="https://static.twentyoverten.com/5b6c40e420726c57d29b423f/ErJr6Tzhi9/AdvisorReport-fr.png" alt="Advisor Report logo" className="disclaimer-logo" style={{ width: '143' + 'px' }}/>
            </a>
            <a href="https://www.fcpe.ca/" target="_blank">
              <StaticImage src="https://static.twentyoverten.com/5b6c40e420726c57d29b423f/4Qq_YJ8Y16/cipf-fr.png" alt="CIPF logo" className="disclaimer-logo" style={{ width: '75' + 'px' }}/>
            </a>
            <a href="https://lautorite.qc.ca/" target="_blank">
              <StaticImage src="https://static.twentyoverten.com/5b6c40e420726c57d29b423f/cG0Z92t2lP/AMF.png" alt="AMF logo" className="disclaimer-logo" style={{ width: '75%', height: '100%' }}/>
            </a>
          </div>
        </div>
        <div className="min-w-screen px-8">
          <div className="flex flex-wrap justify-between max-w-2xl m-auto gap-x-10 py-8">
            <StaticImage
              src="../img/manuvie-logo.png"
              alt="Manuvie logo"
              className="h-auto m-auto mb-6"
              style={{width: '20em', height: '5em'}}
              layout="fixed"
              placeholder="blurred"
            />
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y">
                <p className="text-white font-bold">Jérémie Dumas</p>
                <p className="text-white">725 Boulevard Lebourgneuf</p>
                <p className="text-white">jeremie.dumas@manulifesecurities.ca</p>
                <p className="text-white">(581) 989-5664</p>
              </div>
            </div>
          </div>
          <p className="text-center max-w-7xl text-gray-400 m-auto">
            Les actions, les obligations et les fonds communs de placement sont offerts par l'intermédiaire de Placements Manuvie Incorporée. Les produits et services d'assurance sont offerts à travers  Placements Manuvie Assurance Inc. Placements Manuvie est une filiale en propriété exclusive indirecte de la Société Financière Manuvie (SFM). SFM est propriétaire de La Compagnie d'Assurance-Vie Manufacturers (Manufacturers), entreprise de services financiers qui offre une gamme de solutions en matière d'assurance, de planification successorale, de placement et de services bancaires, par l'intermédiaire d'un réseau de distribution multiple. Manufacturers est propriétaire de Placements Manuvie incorporée, Placements Manuvie Services d'investissement inc. et Placements Manuvie Assurance inc. Elle est également propriétaire de la Banque Manuvie du Canada, banque à charte fédérale de l'Annexe 1, qui est elle-même propriétaire de la Société de fiducie Manuvie, société de fiducie à charte fédérale. Veuillez confirmer avec votre conseiller l'entreprise avec laquelle vous traitez pour chacun de vos produits et services.
          </p>
          <p className="text-center text-white dark:text-white my-4">
            © 2022 Placements Manuvie, tous droits réservés
          </p>
          <p className="text-center text-gray-400 dark:text-white">
            <a aria-label="Mentions légales et avis de non-responsabilité s'ouvre dans une nouvelle fenêtre" href="https://www.placementsmanuvie.ca/avis-de-non-responsabilite.html" target="_blank">
              <strong>Mentions légales et avis de non-responsabilité</strong></a>&nbsp;<strong>|&nbsp;</strong><a href="https://www.manuvie.ca/politiques-de-confidentialite.html" rel="noopener noreferrer" target="_blank"><strong>Politique de confidentialité</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
