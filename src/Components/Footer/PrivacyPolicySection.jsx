/* eslint-disable react/no-unescaped-entities */

const PrivacyPolicySection = () => {
  return (
    <section className="container mx-auto mt-8 mb-32">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>
        <article>
          <p className="mb-4">
            Ce site web est édité par BLF Developpement.
          </p>
          <p className="mb-4">
            Cette page vous informera de nos politiques en matière de collecte, d'utilisation et de divulgation des informations personnelles que nous recevons des utilisateurs du Site. En utilisant le Site, vous consentez à la collecte et à l'utilisation des informations conformément à cette politique.
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Informations que nous collectons</h2>
            <p className="text-gray-700">
              Nous pouvons collecter des informations personnelles identifiables telles que votre adresse électronique, et d'autres informations similaires lorsque vous les soumettez volontairement via notre site web. Nous pouvons également collecter des informations non personnelles sur votre utilisation du Site, telles que les pages que vous consultez, les actions que vous effectuez, et les informations agrégées anonymes générées à partir de ces données.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Utilisation des informations</h2>
            <p className="text-gray-700">
              Nous utilisons les informations personnelles que vous nous fournissez pour vous fournir les services demandés, répondre à vos demandes, personnaliser votre expérience d'utilisation du Site, améliorer nos produits et services, et vous envoyer des informations sur des mises à jour, des promotions ou d'autres offres.
            </p>
            <p className="text-gray-700">
              Nous pouvons également partager vos informations personnelles avec des tiers de confiance pour nous aider à exploiter, maintenir et améliorer le Site. Ces tiers peuvent avoir accès à vos informations personnelles uniquement pour effectuer ces tâches en notre nom et sont tenus de ne pas les divulguer ou les utiliser à d'autres fins.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Sécurité</h2>
            <p className="text-gray-700">
              La sécurité de vos informations personnelles est importante pour nous, mais rappelez-vous qu'aucune méthode de transmission sur Internet, ou méthode de stockage électronique, n'est sécurisée à 100 %. Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos informations personnelles, nous ne pouvons pas garantir leur sécurité absolue.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Liens vers d'autres sites web</h2>
            <p className="text-gray-700">
              Notre Site peut contenir des liens vers d'autres sites web. Si vous cliquez sur un lien tiers, vous serez dirigé vers ce site tiers. Nous vous recommandons vivement de consulter la politique de confidentialité de chaque site que vous visitez.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Modifications de cette politique de confidentialité</h2>
            <p className="text-gray-700">
              Nous nous réservons le droit de mettre à jour ou de modifier cette politique de confidentialité à tout moment. Toutes les modifications seront publiées sur cette page avec la date de révision mise à jour. Nous vous encourageons à consulter cette page régulièrement pour rester informé de toute modification de notre politique de confidentialité.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Nous contacter</h2>
            <p className="text-gray-700">
              Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à l'adresse <a href="mailto:florian.vancamp@gmail.com" className="text-blue-500">florian.vancamp@gmail.com</a>.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
