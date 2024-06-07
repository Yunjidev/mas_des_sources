/* eslint-disable react/no-unescaped-entities */
import { FaPhone, FaEnvelope, FaTrain, FaCar } from 'react-icons/fa';
import reservationImage from '../../assets/Gallery/gallery4.jpg';

const ReservationConditions = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16 px-4 overflow-hidden sm:px-4">
      <div className="pt-8 pb-8 md:pb-6 space-y-8 lg:flex lg:items-center lg:mb-8 lg:space-y-0 lg:space-x-8">
        <div className="lg:w-1/2">
          <p className="text-lg text-center font-bold">
            RÉSERVATION AVEC OU SANS COFFRET WONDERBOX OU AUTRES CHÈQUES CADEAUX
          </p>
          <p className="mt-4 lg:mt-12 text-center">
            Les personnes porteuses d'un coffret qui arrive à expiration, contactez-nous afin de trouver une solution pour ne pas perdre votre séjour.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={reservationImage} alt="Réservation" className="rounded-md shadow-md w-full"/>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Pour confirmer une réservation sans coffret wonderbox</h2>
          <p className="mb-2">
            Vous avez le choix entre la chambre d'hôte, les locations Le Tilleul et Le Châtaignier. Les personnes qui souhaitent venir avec leur enfant seront facturées 30 € par enfant sans petit déjeuner.
          </p>
          <p className="mb-2">
            Pour confirmer votre réservation, contactez-nous au <FaPhone className="inline"/> 04.66.60.47.23 & 06.83.04.46.82 pour convenir d'une date. 
          </p>
          <p className="mb-2">
            Vous devez envoyer le chèque cadeau complété de vos coordonnées à notre adresse postale sous 12 jours, en conservant une photocopie du chèque cadeau :
          </p>
          <p className="mb-2">
            - Brun Brigitte<br/>
            - lieu dit le Thau<br/>
            - 30450 Chambon
          </p>
          <p>Wonderbox conseille d'envoyer le chèque cadeau en recommandé.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Les annulations avec plateforme ou en direct</h2>
          <p className="mb-2">
            Si cela intervient à moins de 15 jours avant la date de séjour prévue, le séjour réservé avec ou sans chèque cadeau n'est pas reporté, ni remboursé pour annulation à cause de la météo ou d'autres motifs, sauf cause de décès très proche avec certificat.
          </p>
          <p>
            Tous les séjours écourtés pour n'importe quel motif (maladie, décès, ou autres) ne sont pas remboursés, ni reportés.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Informations supplémentaires</h2>
          <p className="mb-2">
            Les heures d'arrivée sont à partir de 16 h et les départs avant 10 h.
          </p>
          <p className="mb-2">
            Vous devrez régler avant votre départ la taxe de séjour, obligatoire et reversée à l'agglomération d'Alès.
          </p>
          <p className="mb-2">
            Les repas et les petits déjeuners sont sur commande au prix de 8€ par personnes.
          </p>
          <p className="mb-2">
            Les lits sont prêt avant votre arrivée et les serviettes de toilette compris dans le tarif.
          </p>
          <p className="mb-2">
            Pour les locations Le Tilleul et Le Châtaignier, les repas et petits déjeuners sont servis dans votre gîte. La cuisine est faite maison. Vous n'avez plus qu'à réchauffer.
          </p>
          <p className="mb-2">
            Si vous avez un coffret sans repas, vous avez la possibilité sur commande de les prendre, repas mis à disposition dans votre location au tarif de 23 € par personne et pour les petits déjeuners 8 € par personne, cuisine faite maison avec des produits frais.
          </p>
          <p className="mb-2">
            Les restaurants se situent à 5 minutes en voiture.
          </p>
          <p className="mb-2">
            Nous ne sommes pas équipés d'appareil carte bleue.
          </p>
          <p className="mb-2">
            Suite à de nombreux soucis nous n'acceptons plus les animaux.
          </p>
          <p className="mb-2">
            Ce n'est pas précisé sur tous les coffrets. L'accès au gîte vous sera refusé en cas de présence d'un animal. Merci de votre compréhension.
          </p>
          <p className="mb-2">
            Toute personne arrivant à l'improviste avec un animal sera prier de le faire garder dans un refuge voici un lien :
          </p>
          <p className="mb-2">
            <a href="http://locationgard.jimdo.com/" className="text-blue-500">http://www.ongardevosanimaux.com/dogsitter/classement-region.html</a><br/>
          </p>
          <p>
            Pour vos cadeaux de Noël offrez un séjour au mas des sources pour faire découvrir les trésors qui se cache derrière chaque vallée à vos proches et vos amis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Comment nous trouver</h2>
          <p className='mb-2'>Notre mas est situé entre Chamborigaud (30530) et Chambon (30450). Il est préférable de mettre votre GPS sur Chamborigaud, puis de prendre la direction Chambon. Nous sommes au lieu-dit Le Thau, vous verrez les panneaux en bord de route.</p>
          <p><strong>Par la route :</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li><FaCar className="inline"/> A9 axe Italie/Espagne, Bordeaux/Nice (échangeur Nîmes ouest direction Alès).</li>
            <li><FaCar className="inline"/> A7 axe vallée du Rhône, Marseille/Paris (échangeur Bollène direction Alès).</li>
          </ul>
          <p><strong>Par le train :</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li><FaTrain className="inline"/> TGV Paris/Nîmes en 3 h, puis TER Nîmes/Alès en 30 min, puis direction Chamborigaud à 30 min.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Contact et adresse</h2>
          <p className='mb-2'>
            <strong>Notre adresse :</strong><br/>
            BRUN Brigitte<br/>
            Le Thau, au mas cévenol<br/>
            30450 Le Chambon<br/>
            <a href="http://locationgard.jimdo.com/" className="text-blue-500">http://locationgard.jimdo.com/</a><br/>
            <FaEnvelope className="inline"/> boutierbrigitte30@gmail.com
          </p>
          <p className='mb-2'>
            <strong>Siège social :</strong><br/>
            Le mas des sources cévenol<br/>
            lieu dit le Thau<br/>
            30450 Chambon
          </p>
          <p className='mb-2'>
            <strong>Représentant légal :</strong><br/>
          </p>
          <p>
          Boutier/Brun Brigitte et Noël
          </p>
          <p>
            <FaPhone className="inline"/> 04.66.60.47.23 ou 06.83.04.46.82<br/>
            <FaEnvelope className="inline"/> brigittebrun2@orange.fr
          </p>
          <p className='mb-2'>
            Numéro SIRET : 44912020300020
          </p>
          <p className="mb-6">Nous vous signalons que les connexions sont difficiles car nous sommes en zone de montagne. Si nous ne répondons pas à votre e-mail, contactez-nous par téléphone. Merci de votre compréhension.</p>
        </section>
      </div>
    </div>
  );
};

export default ReservationConditions;
