import { Link } from "react-router-dom";

const SiteInvisibleGoogle = () => (
  <div className="article-prose space-y-6">
    <p className="text-muted-foreground leading-relaxed">
      Vous avez investi dans un site web. Il est en ligne. Vous tapez le nom de votre entreprise dans Google et… rien. Ou pire : vous tapez votre métier suivi de votre ville, et ce sont vos concurrents qui apparaissent.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Ce n'est pas un hasard. En Suisse romande, la majorité des PME que nous auditons partagent les mêmes problèmes de visibilité. Après avoir analysé des dizaines de sites d'entreprises entre Neuchâtel, Lausanne et le reste de la Romandie, voici les 5 causes que nous rencontrons le plus souvent.
    </p>

    <h2 className="text-xl md:text-2xl font-bold mt-12 mb-4">1. Votre site n'est tout simplement pas indexé par Google</h2>
    <p className="text-muted-foreground leading-relaxed">
      C'est la cause la plus basique et pourtant la plus fréquente. Un site peut être parfaitement fonctionnel pour un visiteur humain, mais totalement invisible pour Google.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Comment est-ce possible ? Plusieurs scénarios reviennent régulièrement dans nos{" "}
      <Link to="/services/audit-seo" className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">audits SEO</Link> :
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Le fichier <code className="bg-card px-1.5 py-0.5 rounded text-sm font-mono text-primary">robots.txt</code> bloque l'accès aux robots de Google. Certains développeurs laissent une directive <code className="bg-card px-1.5 py-0.5 rounded text-sm font-mono text-primary">Disallow: /</code> après la mise en ligne, ce qui empêche purement et simplement l'indexation. Une balise <code className="bg-card px-1.5 py-0.5 rounded text-sm font-mono text-primary">noindex</code> oubliée dans le code HTML produit le même effet. Enfin, l'absence de sitemap XML prive Google d'une carte de navigation vers vos pages.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      La vérification est simple : tapez <code className="bg-card px-1.5 py-0.5 rounded text-sm font-mono text-primary">site:votredomaine.ch</code> dans Google. Si aucune page n'apparaît, le problème est là. Google Search Console, l'outil gratuit de Google, vous indiquera précisément quelles pages sont indexées et lesquelles posent problème.
    </p>

    <h2 className="text-xl md:text-2xl font-bold mt-12 mb-4">2. Aucune stratégie de mots-clés adaptée au marché suisse</h2>
    <p className="text-muted-foreground leading-relaxed">
      Avoir un site indexé ne suffit pas. Encore faut-il que Google comprenne de quoi parlent vos pages et sur quelles recherches les afficher.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Le marché suisse romand a une particularité que beaucoup de prestataires web ignorent : les volumes de recherche sont faibles comparés à la France, mais les intentions sont souvent plus qualifiées. Un internaute qui tape « électricien Neuchâtel » a besoin d'un électricien maintenant, pas demain.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Le problème que nous constatons chez la majorité des PME romandes : leurs pages ne contiennent aucun mot-clé pertinent. La page d'accueil dit « Bienvenue chez [nom de l'entreprise] » au lieu de « [Métier] à [Ville] [Promesse claire] ». Les pages de services utilisent un vocabulaire interne que personne ne tape dans Google.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Une{" "}
      <Link to="/services/creation-site-web" className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">étude stratégique de mots-clés</Link>{" "}
      adaptée au marché suisse permet d'identifier les termes que vos clients utilisent réellement. En Suisse romande, cela implique souvent de travailler la longue traîne par canton et par ville, car c'est là que se trouvent les opportunités avec le moins de concurrence.
    </p>

    <h2 className="text-xl md:text-2xl font-bold mt-12 mb-4">3. Votre site est techniquement trop lent ou mal construit</h2>
    <p className="text-muted-foreground leading-relaxed">
      Google évalue la qualité technique de chaque site via ses Core Web Vitals : temps de chargement, stabilité visuelle, réactivité. Un site qui met plus de 4 secondes à charger perd non seulement des visiteurs, mais aussi des positions dans les résultats.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Les problèmes techniques les plus courants que nous identifions lors de nos audits :
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Des images non compressées qui pèsent plusieurs mégaoctets chacune. Un hébergement lointain (serveur en France ou aux États-Unis) alors que vos clients sont en Suisse. Un code surchargé par des plugins inutiles, typique des sites WordPress mal configurés. L'absence de protocole HTTPS, qui est un signal de sécurité pour Google depuis plusieurs années.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Google met à disposition un outil gratuit, PageSpeed Insights, qui analyse ces paramètres et attribue un score de performance. Chez KUMO, nous visons systématiquement un LCP (temps d'affichage du contenu principal) inférieur à 2,5 secondes et un CLS (stabilité visuelle) inférieur à 0,1. Ce sont les seuils recommandés par Google pour une expérience utilisateur correcte.
    </p>

    <h2 className="text-xl md:text-2xl font-bold mt-12 mb-4">4. Aucun référencement local en place</h2>
    <p className="text-muted-foreground leading-relaxed">
      En Suisse romande, plus de la moitié des recherches B2C incluent une composante géographique. « Coiffeur Lausanne », « plombier Neuchâtel », « comptable Yverdon » : ce sont des recherches locales, et Google les traite différemment des recherches génériques.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Pour apparaître dans ces résultats locaux et surtout dans le « pack local » (les 3 résultats avec la carte Google Maps), plusieurs éléments doivent être en place.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      D'abord, une fiche Google Business Profile correctement remplie et vérifiée. Beaucoup de PME ont créé leur fiche il y a des années et ne l'ont jamais mise à jour. Catégories incorrectes, horaires obsolètes, aucune photo récente : autant de signaux négatifs pour Google.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Ensuite, la cohérence NAP (Nom, Adresse, Téléphone) entre votre site, votre fiche Google et les annuaires en ligne. Si votre adresse diffère entre votre site web et local.ch, Google ne sait pas laquelle est correcte et pénalise votre visibilité.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Enfin, votre site lui-même doit contenir des signaux géographiques : nom de votre ville dans les titres, pages dédiées aux zones desservies, balisage Schema LocalBusiness dans le code. Notre{" "}
      <Link to="/services/accompagnement-seo" className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">accompagnement SEO</Link>{" "}
      inclut systématiquement l'optimisation de ces signaux locaux.
    </p>

    <h2 className="text-xl md:text-2xl font-bold mt-12 mb-4">5. Pas de contenu qui répond aux questions de vos clients</h2>
    <p className="text-muted-foreground leading-relaxed">
      Google est devenu un moteur de réponses. Il privilégie les sites qui apportent des réponses claires aux questions que se posent les internautes. Un site avec 3 pages statiques (Accueil, Services, Contact) n'a tout simplement pas assez de matière pour que Google le considère comme pertinent.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      La question à vous poser : quelles sont les 10 questions que vos clients vous posent le plus souvent par téléphone ou par email ? Chacune de ces questions est une opportunité de créer du contenu utile que Google pourra indexer et afficher.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Ce n'est pas du « contenu pour le contenu ». C'est du contenu stratégique qui démontre votre expertise, qui rassure le prospect avant même qu'il vous contacte, et qui génère du trafic qualifié mois après mois sans budget publicitaire.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Un site avec 15 à 20 pages bien structurées et régulièrement mises à jour aura toujours un avantage sur un site de 3 pages, aussi beau soit-il. C'est un investissement dans un actif commercial durable.
    </p>

    <h2 className="text-xl md:text-2xl font-bold mt-12 mb-4">Comment savoir où en est votre site ?</h2>
    <p className="text-muted-foreground leading-relaxed">
      Si vous vous reconnaissez dans une ou plusieurs de ces situations, la première étape est un diagnostic objectif. Pas des suppositions, mais des données.
    </p>
    <p className="text-muted-foreground leading-relaxed">
      Notre{" "}
      <Link to="/services/audit-seo" className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">audit SEO complet</Link>{" "}
      analyse 31 points techniques, évalue votre positionnement actuel sur vos mots-clés stratégiques, identifie vos concurrents locaux et produit un plan d'action priorisé sur 90 jours. Vous savez exactement ce qui bloque et dans quel ordre agir.
    </p>

    <hr className="border-border/50 my-12" />

    <h2 className="text-xl md:text-2xl font-bold mt-12 mb-4">Questions fréquentes</h2>

    <h3 className="text-lg font-semibold mt-8 mb-3">Combien de temps faut-il pour apparaître sur Google après avoir corrigé ces problèmes ?</h3>
    <p className="text-muted-foreground leading-relaxed">
      Les corrections techniques (indexation, vitesse) peuvent produire des effets en quelques semaines. Le travail de fond sur les mots-clés et le contenu demande généralement 3 à 6 mois pour des résultats significatifs. En Suisse romande, la concurrence étant modérée sur beaucoup de requêtes locales, certains positionnements peuvent être obtenus plus rapidement qu'en France.
    </p>

    <h3 className="text-lg font-semibold mt-8 mb-3">Mon site a été fait par un professionnel, pourquoi aurait-il ces problèmes ?</h3>
    <p className="text-muted-foreground leading-relaxed">
      Créer un site web et optimiser un site pour Google sont deux métiers différents. Beaucoup de développeurs et d'agences web excellent dans le design et le développement, mais n'intègrent pas de stratégie SEO dans leur processus de création. Le résultat est un site visuellement réussi mais invisible.
    </p>

    <h3 className="text-lg font-semibold mt-8 mb-3">Est-ce que payer Google Ads peut remplacer le référencement naturel ?</h3>
    <p className="text-muted-foreground leading-relaxed">
      Google Ads génère du trafic immédiat, mais uniquement tant que vous payez. Le jour où vous coupez le budget, votre visibilité disparaît instantanément. Le référencement naturel construit un actif durable : une fois bien positionné, votre site continue d'attirer des visiteurs sans coût additionnel. Les deux approches sont complémentaires, mais le SEO reste la fondation.
    </p>

    <h3 className="text-lg font-semibold mt-8 mb-3">Combien coûte un audit SEO en Suisse ?</h3>
    <p className="text-muted-foreground leading-relaxed">
      Les tarifs varient considérablement selon la profondeur de l'analyse. Chez KUMO, l'{" "}
      <Link to="/services/audit-seo" className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">audit SEO complet</Link>{" "}
      est proposé à 1 200 CHF forfaitaire. Il comprend l'analyse technique, l'étude concurrentielle, un rapport interactif et une restitution en visioconférence avec un plan d'action concret.
    </p>

    <hr className="border-border/50 my-12" />

    <p className="text-muted-foreground leading-relaxed italic">
      Vous voulez savoir exactement pourquoi votre site n'apparaît pas sur Google ?{" "}
      <Link to="/contact" className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">Contactez-nous</Link>{" "}
      pour un premier échange gratuit de 15 minutes.
    </p>
  </div>
);

export default SiteInvisibleGoogle;
