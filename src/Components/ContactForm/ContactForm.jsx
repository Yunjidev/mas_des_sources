import Background from '/src/assets/flower5.png';

const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/mrgnwabb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log('Formulaire soumis avec succès');
      } else {
        console.error('Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
    }
  };

  return (
    <section className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${Background})` }}>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
        <div className="w-full bg-indigo-200 hover:bg-indigo-300 dark:bg-gray-800 rounded-lg shadow-lg p-8 opacity-80"> {/* Ajout de l'opacité à la carte */}
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Contactez-nous</h2>
          <p className="mb-8 lg:mb-16 font-light text-black-500 dark:text-gray-400 sm:text-xl">Une question ? Une remarque ? Contactez-moi par mail ou via ce formulaire, je vous répondrai sans attendre !</p>
          <form onSubmit={handleSubmit} className="space-y-8"> {/* Ajustement de l'espace entre les éléments du formulaire */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre Email</label>
              <input type="email" id="email" name="_replyto" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="exemple@exemple.com" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sujet de votre demande</label>
              <input type="text" id="subject" name="_subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="En quoi puis-je vous aider ?" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre message</label>
              <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Laissez votre message..." required />
            </div>
            <div className="flex justify-end"> {/* Déplacer le bouton à droite */}
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-violet-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Envoyer le message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
