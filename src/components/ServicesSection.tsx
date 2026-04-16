import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ShineBorder } from "@/components/ui/shine-border";

/* ── Création de site ── */
const siteFeatures = [
  "Pages",
  "Préparation stratégique",
  "Optimisé pour Google",
  "Responsive mobile",
  "Hébergement Suisse 1ère année",
  "Rédaction guidée",
  "Rédaction complète par KUMO",
  "Fiche Google",
  "Annuaires suisses + NAP",
  "Design sur-mesure",
  "Accompagnement 3 mois",
];

const sitePlans = [
  {
    kanji: "基本",
    name: "Essentiel",
    price: "3'900",
    featured: false,
    badge: undefined as string | undefined,
    pourQui: "Indépendant, artisan, activité simple avec un service principal.",
    description: "Une base solide. 4 pages sur-mesure pour présenter votre activité et être visible localement.",
    noteSpeciale: "Rédaction guidée : KUMO définit avec vous la structure et les contenus attendus. Vous fournissez la matière. KUMO adapte et optimise pour Google.",
    values: ["4", true, true, true, true, true, false, false, false, true, false] as (string | boolean)[],
  },
  {
    kanji: "推奨",
    name: "Pro",
    price: "4'900",
    featured: true,
    badge: "La formule la plus choisie",
    pourQui: "Entreprise locale qui veut être trouvée et prise au sérieux.",
    description: "La formule complète. 5 à 8 pages, présence locale optimisée, contenus rédigés, fiche Google configurée.",
    noteSpeciale: "Rédaction complète : KUMO rédige l'ensemble des textes. Vous validez, on ajuste.",
    values: ["5–8", true, true, true, true, false, true, true, true, true, false] as (string | boolean)[],
  },
  {
    kanji: "最上",
    name: "Premium",
    price: "6'500",
    featured: false,
    badge: "Lancement accompagné",
    pourQui: "Activité avec plusieurs services, ambition de croissance, besoin d'accompagnement au lancement.",
    description: "Site complet + 3 mois de suivi après mise en ligne. Suivi visibilité Google, ajustements contenu, rapport mensuel, support prioritaire.",
    noteSpeciale: "Après les 3 mois inclus, transition vers une formule de suivi mensuel.",
    values: ["≤10", true, true, true, true, false, true, true, true, true, true] as (string | boolean)[],
  },
];

/* ── Vous avez déjà un site ── */
const ponctuelles = [
  {
    kanji: "検査",
    title: "Audit SEO",
    price: "1'200",
    description: "Analyse complète : technique, contenu, visibilité, concurrents. Rapport interactif + plan d'action 90 jours + appel de restitution 30 min.",
    pourQui: "Toute entreprise qui veut savoir où elle en est et quoi améliorer.",
    link: "/services/audit-seo",
  },
  {
    kanji: "設計",
    title: "Étude et plan",
    price: "1'190",
    description: "Architecture, mots-clés, textes, feuille de route. La fondation d'un site qui performe.",
    pourQui: "Entreprise qui prépare un nouveau site et veut valider la stratégie avant de s'engager.",
    note: "Ce montant est intégralement déduit du forfait si vous confirmez la création du site.",
    link: "/contact",
  },
];

const mandatNiveaux = [
  { complexite: "Standard", prix: "2'900", profil: "Site vitrine simple, quelques pages, problèmes limités" },
  { complexite: "Élevé", prix: "4'500", profil: "Site vitrine professionnel, 20–50 pages" },
  { complexite: "Très élevé", prix: "À partir de 6'900", profil: "E-commerce ou site 50+ pages, problèmes multiples" },
];

const mandatInclus = [
  "Corrections techniques complètes (indexation, plan du site, balises)",
  "Optimisation de toutes les pages (titres, descriptions, structure)",
  "Amélioration du contenu (lisibilité, pages sous-performantes)",
  "Stratégie de visibilité externe",
  "Suivi de positionnement pendant la mission",
  "2 points d'avancement en visioconférence",
  "Rapport de résultats détaillé à 90 jours",
];

/* ── Formules de suivi ── */
const suiviPlans = [
  {
    kanji: "保守",
    name: "Maintenance",
    price: "250",
    featured: false,
    badge: undefined as string | undefined,
    engagement: "Sans engagement. Résiliable à 30 jours.",
    pourQui: "Votre site reste en bonne santé. Sauvegardes, surveillance, petits correctifs.",
    features: [
      "Surveillance + sauvegardes",
      "Correctifs techniques",
      "Support email (48h)",
      "Petites modifications (30 min/mois)",
      "Hébergement inclus",
    ],
  },
  {
    kanji: "追跡",
    name: "Suivi Visibilité",
    price: "590",
    featured: true,
    badge: "Recommandé",
    engagement: "Engagement de 6 mois, puis résiliable mensuellement.",
    pourQui: "On surveille, on maintient, on évite que votre site stagne. Rapport mensuel + 1 amélioration ciblée/mois.",
    features: [
      "Tout Maintenance inclus",
      "Suivi positions Google",
      "Rapport mensuel",
      "1 amélioration ciblée/mois",
      "Vérification fiche Google",
    ],
  },
  {
    kanji: "成長",
    name: "Croissance",
    price: "1'490",
    featured: false,
    badge: undefined as string | undefined,
    engagement: "Engagement de 6 mois, puis résiliable mensuellement.",
    pourQui: "On identifie chaque mois l'amélioration la plus utile pour vos résultats, et on la met en œuvre.",
    features: [
      "Tout Suivi Visibilité inclus",
      "Sprint stratégique mensuel",
      "Analyse approfondie Google",
      "Point mensuel 15 min",
      "Actions supp. : CHF 300/action",
    ],
  },
];

/* ── Quelle formule ── */
const situations = [
  { situation: "Indépendant, activité simple, premier site", recommandation: "Essentiel (3'900 CHF) + Maintenance (250 CHF/mois)" },
  { situation: "PME locale, besoin de visibilité", recommandation: "Pro (4'900 CHF) + Suivi (590 CHF/mois)" },
  { situation: "Ambition de croissance, plusieurs services", recommandation: "Premium (6'500 CHF) puis Croissance (1'490 CHF/mois)" },
  { situation: "Vous avez un site à améliorer", recommandation: "Audit (1'200 CHF) + Mandat 90j + Suivi (590 CHF/mois)" },
  { situation: "Votre site va bien, vous voulez surveiller", recommandation: "Audit (1'200 CHF) + Suivi (590 CHF/mois)" },
];

/* ── Prestations complémentaires ── */
const supplementCategories = [
  "Pages supplémentaires",
  "Modifications ponctuelles",
  "Images & visuels",
  "Fonctionnalités additionnelles",
  "Évolutions structurelles",
];

/* ── Bon à savoir ── */
const etapes = [
  { num: "01", title: "Premier échange", desc: "On discute de vos besoins. Sans engagement." },
  { num: "02", title: "Proposition", desc: "Offre adaptée avec prix fixe." },
  { num: "03", title: "Validation", desc: "Vous confirmez, on démarre." },
  { num: "04", title: "Préparation", desc: "Analyse marché, structure, mots-clés." },
  { num: "05", title: "Création", desc: "Développement avec points de validation." },
  { num: "06", title: "Votre retour", desc: "Validation et ajustements (2 séries de retours incluses)." },
  { num: "07", title: "Mise en ligne", desc: "Site publié, outils actifs." },
];

const ServicesSection = () => {

  return (
    <section id="services" className="py-24 md:py-40">
      <div className="container max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Services</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Nos forfaits SEO : audit, création web{" "}
            <span className="text-primary text-neon-line relative">et</span> <span className="text-primary text-neon-line relative">accompagnement</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acompte 40 % à la commande, solde à la livraison. 2 séries de retours incluses. Garantie 30 jours.
          </p>
        </motion.div>

        {/* ── SECTION 1 : Création de site ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <p className="section-label mb-4">制作 Création de site</p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Trois formules adaptées à <span className="text-primary text-neon-line relative">votre</span> <span className="text-primary text-neon-line relative">situation.</span>
          </h3>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Chaque site est codé sur-mesure et inclut une phase de préparation stratégique.
          </p>

          <div className="grid lg:grid-cols-3 gap-4 mb-4">
            {sitePlans.map((plan, i) => (
              <ShineBorder
                key={plan.name}
                shineColor={plan.featured ? ["#5B2ECC", "#39FF6A", "#FFFFFF"] : ["#C4B7D4", "#A894C2", "#C4B7D4"]}
                duration={plan.featured ? 6 : 12}
                borderWidth={plan.featured ? 2 : 1}
              >
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card p-8 flex flex-col h-full"
                >
                  {plan.badge && (
                    <span className="inline-block text-xs font-mono text-primary-light border border-primary/30 rounded-full px-2 py-0.5 mb-3 self-start">
                      {plan.badge}
                    </span>
                  )}
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {plan.kanji} {plan.name} {plan.featured && "⭐"}
                  </span>
                  <div className="text-gold font-mono font-bold text-2xl mb-1">CHF {plan.price}.–</div>
                  <p className="text-xs text-muted-foreground mb-3">{plan.description}</p>
                  {plan.noteSpeciale && (
                    <p className="text-xs text-primary/80 italic mb-4 leading-relaxed">{plan.noteSpeciale}</p>
                  )}
                  <p className="text-xs text-muted-foreground/80 mb-6">Pour qui : {plan.pourQui}</p>

                  <div className="space-y-2 flex-1">
                    {siteFeatures.map((feat, j) => {
                      const val = plan.values[j];
                      return (
                        <div key={feat} className="flex items-center gap-2">
                          {typeof val === "string" ? (
                            <span className="text-xs font-mono text-gold shrink-0 min-w-[2rem] text-center">{val}</span>
                          ) : val ? (
                            <Check size={14} className="text-primary-light shrink-0" />
                          ) : (
                            <X size={14} className="text-muted-foreground/30 shrink-0" />
                          )}
                          <span className="text-xs text-muted-foreground">{feat}</span>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    to="/contact"
                    className="text-sm text-primary-light hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium mt-6"
                  >
                    Demander un devis <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </ShineBorder>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mb-8">
            Étude et plan (CHF 1'190) créditée à 100 % si vous signez un forfait site.
          </p>

          {/* Hébergement sub-section */}
          <div className="glass-card p-6">
            <p className="font-mono text-xs text-primary-light uppercase tracking-wider mb-3">Hébergement et domaine</p>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <Check size={14} className="text-primary-light shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Première année incluse dans tous les forfaits site.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check size={14} className="text-primary-light shrink-0 mt-0.5" />
                <span className="text-muted-foreground">À partir de l'année 2 : <span className="text-gold font-mono font-semibold">290 CHF/an</span> (hébergement suisse + domaine + SSL).</span>
              </div>
              <div className="flex items-start gap-2">
                <Check size={14} className="text-primary-light shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Inclus sans frais pour les clients avec une formule de suivi active.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── SECTION 2 : Vous avez déjà un site ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <p className="section-label mb-4">単発 Vous avez déjà un site</p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Diagnostiquer et <span className="text-gradient">planifier.</span>
          </h3>

          {/* Audit + Étude et plan */}
          <div className="grid md:grid-cols-2 gap-px bg-border/50 rounded-lg overflow-hidden mb-12">
            {ponctuelles.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 flex flex-col"
              >
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">{s.kanji} {s.title}</span>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{s.description}</p>
                {s.note && (
                  <p className="text-xs text-primary-light mb-4">{s.note}</p>
                )}
                <p className="text-xs text-muted-foreground mb-4">Pour qui : {s.pourQui}</p>
                <div className="border-t border-border/50 pt-4 mt-auto">
                  <div className="text-gold font-mono font-bold text-lg mb-3">CHF {s.price}.–</div>
                  <Link to={s.link} className="text-sm text-primary-light hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium">
                    En savoir plus <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mandat SEO 90 jours */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="glass-card p-8">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">九十日 Mandat SEO 90 jours</p>
              <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-1">
                Optimisation en <span className="text-gradient">profondeur.</span>
              </h4>
              <p className="text-sm text-muted-foreground mb-2">À partir de 2'900 CHF, forfait unique</p>
              <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
                Après votre audit, si votre site a besoin d'un travail d'optimisation en profondeur, nous proposons un mandat forfaitaire sur 90 jours. Le prix est fixé après l'audit, selon la complexité de votre site.
              </p>

              {/* Niveaux */}
              <div className="grid md:grid-cols-3 gap-px bg-border/50 rounded-lg overflow-hidden mb-8">
                {mandatNiveaux.map((n, i) => (
                  <motion.div
                    key={n.complexite}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card p-6 flex flex-col"
                  >
                    <span className="font-mono text-xs text-primary-light uppercase tracking-wider mb-2">{n.complexite}</span>
                    <div className="text-gold font-mono font-bold text-xl mb-2">{n.prix.startsWith("À") ? n.prix : `CHF ${n.prix}.–`}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{n.profil}</p>
                  </motion.div>
                ))}
              </div>

              {/* Ce qui est inclus */}
              <p className="font-mono text-xs text-primary-light uppercase tracking-wider mb-4">Ce qui est inclus</p>
              <div className="grid sm:grid-cols-2 gap-2 mb-8">
                {mandatInclus.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check size={14} className="text-primary-light shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mb-6">
                Toujours précédé d'un Audit SEO (1'200 CHF). Paiement en 3 mensualités possibles.
              </p>

              {/* Encadré exemple */}
              <div className="border border-primary/20 rounded-lg p-5 bg-primary/5">
                <p className="font-mono text-xs text-primary-light uppercase tracking-wider mb-2">Exemple de projet complet</p>
                <p className="text-sm text-muted-foreground mb-2">
                  Audit (1'200) + Mandat 90j élevé (4'500) + Suivi 6 mois (6 × 590)
                </p>
                <p className="text-gold font-mono font-bold text-lg">Investissement total sur 9 mois : 9'240 CHF</p>
                <p className="text-xs text-muted-foreground mt-1">Vous connaissez le coût complet dès le départ. Pas de surprise.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── SECTION 3 : Formules de suivi ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <p className="section-label mb-4">月額 Formules de suivi</p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Maintenir et <span className="text-gradient">progresser.</span>
          </h3>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Votre site a besoin d'être surveillé, maintenu et amélioré. Les formules KUMO assurent que votre investissement continue à travailler pour vous.
          </p>

          <div className="grid lg:grid-cols-3 gap-4 mb-6">
            {suiviPlans.map((plan, i) => (
              <ShineBorder
                key={plan.name}
                shineColor={plan.featured ? ["#5B2ECC", "#39FF6A", "#FFFFFF"] : ["#C4B7D4", "#A894C2", "#C4B7D4"]}
                duration={plan.featured ? 6 : 12}
                borderWidth={plan.featured ? 2 : 1}
              >
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card p-8 flex flex-col h-full"
                >
                  {plan.badge && (
                    <span className="inline-block text-xs font-mono text-primary-light border border-primary/30 rounded-full px-2 py-0.5 mb-3 self-start">
                      {plan.badge}
                    </span>
                  )}
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {plan.kanji} {plan.name} {plan.featured && "⭐"}
                  </span>
                  <div className="text-gold font-mono font-bold text-2xl mb-1">
                    CHF {plan.price}.–<span className="text-sm font-normal text-muted-foreground">/mois</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{plan.engagement}</p>
                  <p className="text-xs text-muted-foreground mb-6">{plan.pourQui}</p>

                  <div className="space-y-2 flex-1">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <Check size={14} className="text-primary-light shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="text-sm text-primary-light hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium mt-6"
                  >
                    Souscrire <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </ShineBorder>
            ))}
          </div>

          {/* Sprint ponctuel */}
          <div className="border border-primary/20 rounded-lg p-5 bg-primary/5 mb-8">
            <p className="font-mono text-xs text-primary-light uppercase tracking-wider mb-1">Sprint ponctuel</p>
            <p className="text-sm text-muted-foreground">
              Disponible pour les clients Suivi. Besoin d'une action supplémentaire ponctuellement ? Ajoutez un sprint d'optimisation à{" "}
              <span className="text-gold font-mono font-semibold">450 CHF</span>, sans engagement.
            </p>
          </div>

          {/* Modifications */}
          <div className="glass-card p-6">
            <p className="font-mono text-xs text-primary-light uppercase tracking-wider mb-3">Vos demandes de modifications</p>
            <p className="text-sm text-muted-foreground mb-4">
              Votre site est codé sur-mesure pour la performance et la sécurité. Pour toute modification, vous disposez d'un espace de demandes dédié avec un délai de traitement de 48h.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Check size={14} className="text-primary-light shrink-0 mt-0.5" />
                <span className="text-xs text-muted-foreground">Les petites modifications (textes, horaires, coordonnées) sont incluses dans votre formule (30 min/mois).</span>
              </div>
              <div className="flex items-start gap-2">
                <Check size={14} className="text-primary-light shrink-0 mt-0.5" />
                <span className="text-xs text-muted-foreground">Au-delà : <span className="text-gold font-mono">150 CHF/h</span> (minimum facturé 30 min = 75 CHF).</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── SECTION 4 : Quelle formule ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <p className="section-label mb-4">選択 Votre situation</p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Quelle formule correspond à{" "}
            <span className="text-gradient">votre situation&nbsp;?</span>
          </h3>
          <div className="divide-y divide-border/50 rounded-lg border border-border/50 overflow-hidden">
            {situations.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-card px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8"
              >
                <span className="text-sm text-muted-foreground flex-1">{s.situation}</span>
                <span className="text-sm font-mono text-gold shrink-0">{s.recommandation}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Ces recommandations sont indicatives. Un premier échange permet de préciser la meilleure option pour vous.
          </p>
        </motion.div>

        {/* ── SECTION 5 : Prestations complémentaires ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="glass-card p-6 md:p-8">
            <p className="section-label mb-2">補足 Prestations complémentaires</p>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              Votre projet peut évoluer. Pages supplémentaires, fonctionnalités sur mesure, intégrations spécifiques... Je m'adapte à vos besoins, avec des tarifs communiqués avant tout démarrage.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {supplementCategories.map((cat) => (
                <span key={cat} className="font-mono text-xs text-primary-light border border-primary/20 rounded px-3 py-1">
                  {cat}
                </span>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary-light transition-colors"
            >
              Discutons de votre projet <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* ── SECTION 6 : Bon à savoir ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-label mb-4">知識 Bon à savoir</p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Tout ce qu'il faut savoir{" "}
            <span className="text-gradient">avant de démarrer.</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Tarifs clairs */}
            <div className="glass-card p-6">
              <p className="font-mono text-xs text-primary-light uppercase tracking-wider mb-3">Tarifs clairs et précis</p>
              <p className="text-sm text-muted-foreground">
                Chaque projet démarre par un diagnostic complet et un listing détaillé des tâches à réaliser. Vous recevez un planning clair avant de vous engager : vous savez exactement ce qui est prévu, dans quel ordre, et pour quel résultat.
              </p>
            </div>

            {/* Délais */}
            <div className="glass-card p-6">
              <p className="font-mono text-xs text-primary-light uppercase tracking-wider mb-3">Délais</p>
              <p className="text-sm text-muted-foreground">
                Un site de 4 à 8 pages est livré en 3 à 5 semaines. Le principal facteur de délai : la réception de vos éléments.
              </p>
            </div>

            {/* Conditions de paiement */}
            <div className="glass-card p-6">
              <p className="font-mono text-xs text-primary-light uppercase tracking-wider mb-3">Conditions de paiement</p>
              <div className="space-y-2">
                {[
                  "Création de site : 40 % à la signature, 60 % à la livraison",
                  "Mandat 90 jours : paiement en 3 mensualités possibles",
                  "Abonnements : facturation mensuelle",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-primary-light font-mono text-xs shrink-0 mt-0.5">→</span>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interlocuteur unique */}
            <div className="glass-card p-6">
              <p className="font-mono text-xs text-primary-light uppercase tracking-wider mb-3">Un interlocuteur unique</p>
              <p className="text-sm text-muted-foreground">
                Pas d'agence complexe. Un seul contact, des échanges simples, un suivi direct.
              </p>
            </div>
          </div>

          {/* Déroulement du projet */}
          <div className="glass-card p-6 md:p-8">
            <p className="font-mono text-xs text-primary-light uppercase tracking-wider mb-6">Comment se déroule un projet</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {etapes.map((e) => (
                <div key={e.num} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-primary/40 shrink-0 mt-0.5">{e.num}</span>
                  <div>
                    <p className="text-sm font-medium mb-0.5">{e.title}</p>
                    <p className="text-xs text-muted-foreground">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
