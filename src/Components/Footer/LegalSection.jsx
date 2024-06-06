/* eslint-disable react/no-unescaped-entities */

const LegalSection = () => {
  return (
    <section className="container mx-auto mt-8 mb-96">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>
        <article>
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Mentions Légales du Site</h2>
            <p className="text-gray-700">
              Ce site est édité par BLF Developpement<br />
              Numéro de siret : 92852148300018 <br />
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Mentions Légales du Gîte</h2>
            <p className="text-gray-700">
              Le gîte proposé sur ce site est géré par Brun Brigitte, Le thau 30450 CHAMBON<br />
              Numéro de téléphone du gîte : 04.66.60.47.23 / 06.83.04.46.82 <br />
              Mail : boutierbrigitte30@gmail.com / brigittebrun2@orange.fr
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Conditions d'Utilisation</h2>
            <p className="text-gray-700">
              En accédant à ce site, vous acceptez d'être lié par ces conditions d'utilisation, toutes les lois et réglementations applicables, et vous acceptez que vous êtes responsable de la conformité à toutes les lois locales applicables. Si vous n'acceptez pas l'une de ces conditions, vous êtes interdit d'utiliser ou d'accéder à ce site. 
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Cookies</h2>
            <p className="text-gray-700">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. En utilisant notre site, vous consentez à tous les cookies conformément à notre politique en matière de cookies.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Limitations</h2>
            <p className="text-gray-700">
              En aucun cas, BLF Developpement ou ses fournisseurs ne pourront être tenus responsables de tout dommage (y compris, sans limitation, des dommages pour perte de données ou de profit, ou en raison d'une interruption d'activité) découlant de l'utilisation ou de l'incapacité à utiliser les documents sur le site BLF Developpement, même si BLF Developpement ou un représentant autorisé de BLF Developpement a été informé verbalement ou par écrit de la possibilité d'un tel dommage. 
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Propriété intellectuelle</h2>
            <p className="text-gray-700">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Responsabilité</h2>
            <p className="text-gray-700">
              L'éditeur du site met à disposition un contenu informatif. Malgré tout le soin apporté aux informations diffusées, l'éditeur du site décline toute responsabilité en cas d'erreur ou d'omission.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default LegalSection;
