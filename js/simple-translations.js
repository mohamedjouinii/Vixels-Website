// Simple hardcoded translation system
const translations = {
    en: {
        'services.section-title': 'Our Features',
        'services.title': 'Complete Restaurant Menu System',
        'services.subtitle': 'Discover all the powerful features that make our Smart Restaurant/Cafe Menu System the perfect solution for your business.',
        'services.professional-website.title': 'Professional Brand Website',
        'services.professional-website.desc': 'Build your restaurant\'s digital presence with a custom website featuring your menu, high-quality images, and brand story. Perfect for SEO optimization, social media marketing, and establishing professional online credibility.',
        'services.qr-ordering.title': 'QR Code Ordering System',
        'services.qr-ordering.desc': 'Revolutionize your service with contactless ordering. Each table gets a unique QR code that customers scan to access your digital menu, place orders, and pay instantly. Reduces wait times and improves customer experience significantly.',
        'services.payments.title': 'Flexible Payment Solutions',
        'services.payments.desc': 'Accept payments both online and in-person with our integrated payment system. Support for Stripe, PayPal, and other popular payment gateways ensures secure transactions and customer convenience. Handle split bills and generate receipts automatically.',
        'services.dashboard.title': 'Income Management Dashboard',
        'services.dashboard.desc': 'Take complete control of your restaurant\'s finances with real-time income tracking, sales analytics, profit reports, and revenue insights. Make informed business decisions with comprehensive financial data and export capabilities for accounting.',
        'services.notifications.title': 'Instant Order Notifications',
        'services.notifications.desc': 'Never miss an order with our instant notification system. Staff receive immediate alerts via tablet, smartphone, or kitchen printer, ensuring faster service and better customer satisfaction. Track order status in real-time.',
        'services.reservations.title': 'Online Reservation System',
        'services.reservations.desc': 'Streamline your booking process with our integrated online reservation system. Customers can book tables directly from your website while you manage availability and confirmations from your dashboard. Collect customer information and send automated confirmations.',
        'services.upsell.title': 'Optional Upsell Features',
        'services.upsell.desc': 'Loyalty points, discount codes, customer feedback, online delivery - available as paid upgrades to enhance your restaurant\'s customer experience and increase revenue.',
        'services.analytics.title': 'Financial Analytics & Reports',
        'services.analytics.desc': 'Comprehensive income tracking with detailed financial reports, profit analysis, and revenue insights. Export data for accounting and make informed business decisions with advanced analytics.',
        'services.professional-website.feature1': 'Custom domain and professional design',
        'services.professional-website.feature2': 'SEO optimized for local search',
        'services.professional-website.feature3': 'Mobile-responsive layout',
        'services.professional-website.feature4': 'Social media integration',
        'services.qr-ordering.feature1': 'Contactless ordering experience',
        'services.qr-ordering.feature2': 'Unique QR codes per table',
        'services.qr-ordering.feature3': 'Instant order notifications',
        'services.qr-ordering.feature4': 'Multi-language support',
        'services.payments.feature1': 'Multiple payment gateways',
        'services.payments.feature2': 'Secure transaction processing',
        'services.payments.feature3': 'Split bill functionality',
        'services.payments.feature4': 'Receipt generation',
        'services.dashboard.feature1': 'Real-time sales tracking',
        'services.dashboard.feature2': 'Profit and loss reports',
        'services.dashboard.feature3': 'Revenue analytics',
        'services.dashboard.feature4': 'Export data for accounting',
        'services.notifications.feature1': 'Real-time order alerts',
        'services.notifications.feature2': 'Multiple notification methods',
        'services.notifications.feature3': 'Kitchen printer integration',
        'services.notifications.feature4': 'Order status tracking',
        'services.reservations.feature1': 'Online table booking',
        'services.reservations.feature2': 'Availability management',
        'services.reservations.feature3': 'Automated confirmations',
        'services.reservations.feature4': 'Customer information collection',
        'services.upsell.feature1': 'Loyalty points system',
        'services.upsell.feature2': 'Discount codes & promotions',
        'services.upsell.feature3': 'Customer feedback collection',
        'services.upsell.feature4': 'Online delivery integration',
        'services.analytics.feature1': 'Detailed financial reports',
        'services.analytics.feature2': 'Profit analysis & insights',
        'services.analytics.feature3': 'Revenue trend analysis',
        'services.analytics.feature4': 'Accounting data export',
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.benefits': 'Benefits',
        'nav.contact': 'Contact',
        'nav.book-demo': 'Book a Demo',
        'cta.title': 'Ready to Transform Your Restaurant?',
        'cta.subtitle': 'Join hundreds of restaurants already using our Smart Menu System to increase efficiency, improve customer experience, and boost revenue.',
        'cta.book-demo': 'Book a Demo',
        'cta.contact': 'Contact Us',
        
        // Newsletter Section
        'newsletter.title': 'Newsletter',
        'newsletter.heading': 'Stay Always In Touch',
        'newsletter.description': 'Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo',
        'newsletter.placeholder': 'Enter Your Email',
        
        // Testimonial Section
        'testimonial.title': 'Testimonial',
        'testimonial.heading': 'What Say Our Clients!',
        'testimonial.text': 'Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.',
        'testimonial.client-name': 'Client Name',
        'testimonial.profession': 'Profession',
        
        // Footer Section
        'footer.newsletter-title': 'Newsletter',
        'footer.newsletter-desc': 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu',
        'footer.email-placeholder': 'Your Email',
        
        // Hero Section
        'hero.go-digital': 'GO DIGITAL',
        'hero.title': 'Smart Restaurant/Cafe Ordering System',
        'hero.subtitle': 'Transform your restaurant/cafe with our complete digital menu solution. QR code ordering, table reservations, flexible payments, and real-time analytics - all in one platform.',
        'hero.ai-feature': 'Powered by Personalized AI',
        'hero.ai-description': 'Transform your PDF menu into a seamless, beautifully designed digital experience with our intelligent AI technology.',
        'hero.see-features': 'See Features',
        'hero.book-demo': 'Book a Demo',
        
        // Benefits Section
        'benefits.title': 'Why Partner With Us?',
        'benefits.subtitle': 'Transform your restaurant operations with our digital menu system. Build your brand with a professional website, manage income through our comprehensive dashboard, boost marketing reach, streamline operations with online reservations and customer satisfaction improvement.',
        'benefits.income-improvement': 'Income Improvement',
        'benefits.customer-experience': 'Customer Experience Enhancement',
        'benefits.online-reservation': 'Online Reservation System',
        'benefits.income-management': 'Income Management Dashboard',
        'benefits.ai-transformation': 'AI-Powered Menu Transformation',
        'benefits.see-services': 'See Our Services',
        
        // Demo Form
        'demo.title': 'See How Our System Works for Your Restaurant/Cafe',
        'demo.subtitle': 'Enter your data and we will get back to you by email to schedule your personalized demo.',
        'demo.restaurant-name': 'Restaurant/Cafe Name',
        'demo.owner-name': 'Your Name',
        'demo.email': 'Your Email',
        'demo.phone': 'Phone Number',
        'demo.address': 'Restaurant Address',
        'demo.message': 'Tell us about your restaurant/cafe and what you\'d like to see in the demo',
        'demo.submit': 'Book My Demo',
        'demo.submitting': 'Submitting...',
        'demo.success': 'Thank you! Your demo request has been submitted successfully. We will contact you soon to schedule your demo.',
        'demo.error': 'Sorry, there was an error submitting your request. Please try again or contact us directly.',
        
        // Footer
        'footer.contact-info': 'Contact Information',
        'footer.follow-us': 'Follow Us',
        'footer.our-location': 'Our Location',
        
        // User Flow Stepper
        'user-flow.title': 'How It Works',
        'user-flow.subtitle': 'Simple Steps to Digital Success',
        'user-flow.description': 'Experience the seamless journey from QR code scanning to order completion and business management.',
        'user-flow.step1.title': 'Scan QR Code',
        'user-flow.step1.description': 'Customer scans the unique QR code on their table to access the digital menu instantly.',
        'user-flow.step2.title': 'Browse AI-Transformed Menu',
        'user-flow.step2.description': 'Explore our beautifully designed digital menu, transformed from your PDF using our personalized AI technology. High-quality images, descriptions, and real-time availability.',
        'user-flow.step3.title': 'Place Order',
        'user-flow.step3.description': 'Select items, customize orders, and pay securely through multiple payment options.',
        'user-flow.step4.title': 'Instant Notification',
        'user-flow.step4.description': 'Restaurant owner receives instant order notification via tablet, smartphone, or kitchen printer.',
        'user-flow.step5.title': 'Order Tracking',
        'user-flow.step5.description': 'Customer receives order confirmation and real-time countdown timer through the app.',
        'user-flow.step6.title': 'Enjoy Experience',
        'user-flow.step6.description': 'Customer receives their order and enjoys a seamless, contactless dining experience.',
        'user-flow.step7.title': 'Dashboard Management',
        'user-flow.step7.description': 'All orders and customer data are stored in your dashboard for income tracking and business scalability.',
        'user-flow.step8.title': 'Customer Engagement',
        'user-flow.step8.description': 'Create exclusive coupon codes for discounts and send personalized marketing emails to keep customers engaged and coming back to your restaurant/cafe.',
        
        // Website Integration Flow
        'website-flow.title': 'Website Integration',
        'website-flow.subtitle': 'Seamless Website Solutions for Every Business',
        'website-flow.description': 'Whether you have an existing website or need one created, we provide complete solutions to integrate our digital menu system seamlessly.',
        'website-flow.step1.title': 'Website Creation or Integration',
        'website-flow.step1.description': 'For restaurants/cafes without a website, we create a creative, professional website. For existing websites, we provide simple API integration to implement the menu in minutes.',
        'website-flow.step2.title': 'Menu Implementation',
        'website-flow.step2.description': 'We implement your digital menu directly into your website with high-quality images, descriptions, and real-time pricing updates.',
        'website-flow.step3.title': 'Online Table Reservations',
        'website-flow.step3.description': 'We implement online table reservation system to both newly created websites and existing ones through simple integration.',
        'website-flow.step4.title': 'Reservation Notifications',
        'website-flow.step4.description': 'The admin receives all reservation orders instantly in the dashboard with customer details and preferences.',
        'website-flow.step5.title': 'Reservation Confirmation',
        'website-flow.step5.description': 'Customer receives immediate confirmation of their reservation with details and any special instructions.',
        'website-flow.step6.title': 'Enhanced Experience',
        'website-flow.step6.description': 'Customer enjoys a seamless experience with online reservations, and the store owner increases income and customer satisfaction.',
        
        // Marketing & Customer Engagement
        'marketing.title': 'Customer Engagement',
        'marketing.subtitle': 'Build Lasting Relationships with Your Customers',
        'marketing.description': 'Keep your customers engaged and coming back with personalized email marketing, exclusive offers, and loyalty rewards.',
        'marketing.email-updates.title': 'Email Updates & Newsletters',
        'marketing.email-updates.description': 'Send personalized email updates about new menu items, special events, and restaurant news to keep customers informed and engaged.',
        'marketing.coupon-codes.title': 'Exclusive Coupon Codes',
        'marketing.coupon-codes.description': 'Create and distribute exclusive discount codes and promotional offers to reward loyal customers and attract new ones.',
        'marketing.birthday-offers.title': 'Birthday & Special Occasions',
        'marketing.birthday-offers.description': 'Automatically send birthday wishes with special offers and celebrate customer milestones to strengthen relationships.',
        'marketing.analytics.title': 'Customer Analytics & Insights',
        'marketing.analytics.description': 'Track customer behavior, preferences, and engagement metrics to optimize your marketing campaigns and improve customer satisfaction.',
        'marketing.dashboard.title': 'Marketing Dashboard',
        'marketing.dashboard.new-campaign': 'New Campaign',
        'marketing.dashboard.view-analytics': 'View Analytics',
        'marketing.dashboard.campaign1': 'Summer Menu Launch',
        'marketing.dashboard.campaign1-stats': 'Sent to 1,250 customers • 85% open rate',
        'marketing.dashboard.campaign2': 'Weekend Special Offer',
        'marketing.dashboard.campaign2-stats': 'Sent to 890 customers • 92% open rate',
        'marketing.dashboard.campaign3': 'Birthday Campaign',
        'marketing.dashboard.campaign3-stats': 'Auto-sent to 45 customers this month',
        'marketing.dashboard.coupon-title': 'Active Coupon Codes',
        'marketing.dashboard.coupon-discount': '20% Off',
        'marketing.dashboard.coupon-discount2': '$10 Off First Order'
    },
    de: {
        'services.section-title': 'Unsere Funktionen',
        'services.title': 'Komplettes Restaurant-Menüsystem',
        'services.subtitle': 'Entdecken Sie alle leistungsstarken Funktionen, die unser intelligentes Restaurant/Café-Menüsystem zur perfekten Lösung für Ihr Unternehmen machen.',
        'services.professional-website.title': 'Professionelle Markenwebsite',
        'services.professional-website.desc': 'Bauen Sie die digitale Präsenz Ihres Restaurants mit einer benutzerdefinierten Website auf, die Ihr Menü, hochwertige Bilder und Ihre Markengeschichte enthält. Perfekt für SEO-Optimierung, Social Media Marketing und die Etablierung professioneller Online-Glaubwürdigkeit.',
        'services.qr-ordering.title': 'QR-Code-Bestellsystem',
        'services.qr-ordering.desc': 'Revolutionieren Sie Ihren Service mit berührungsloser Bestellung. Jeder Tisch erhält einen eindeutigen QR-Code, den Kunden scannen, um auf Ihr digitales Menü zuzugreifen, Bestellungen aufzugeben und sofort zu bezahlen. Reduziert Wartezeiten und verbessert die Kundenerfahrung erheblich.',
        'services.payments.title': 'Flexible Zahlungslösungen',
        'services.payments.desc': 'Akzeptieren Sie Zahlungen sowohl online als auch persönlich mit unserem integrierten Zahlungssystem. Unterstützung für Stripe, PayPal und andere beliebte Zahlungsgateways gewährleistet sichere Transaktionen und Kundenzufriedenheit. Behandeln Sie geteilte Rechnungen und generieren Sie automatisch Quittungen.',
        'services.dashboard.title': 'Einkommensverwaltungs-Dashboard',
        'services.dashboard.desc': 'Übernehmen Sie die vollständige Kontrolle über die Finanzen Ihres Restaurants mit Echtzeit-Einkommensverfolgung, Verkaufsanalysen, Gewinnberichten und Umsatzeinblicken. Treffen Sie fundierte Geschäftsentscheidungen mit umfassenden Finanzdaten und Exportfunktionen für die Buchhaltung.',
        'services.notifications.title': 'Sofortige Bestellbenachrichtigungen',
        'services.notifications.desc': 'Verpassen Sie nie eine Bestellung mit unserem sofortigen Benachrichtigungssystem. Das Personal erhält sofortige Warnungen über Tablet, Smartphone oder Küchendrucker, was einen schnelleren Service und bessere Kundenzufriedenheit gewährleistet. Verfolgen Sie den Bestellstatus in Echtzeit.',
        'services.reservations.title': 'Online-Reservierungssystem',
        'services.reservations.desc': 'Optimieren Sie Ihren Buchungsprozess mit unserem integrierten Online-Reservierungssystem. Kunden können Tische direkt von Ihrer Website aus buchen, während Sie Verfügbarkeit und Bestätigungen von Ihrem Dashboard aus verwalten. Sammeln Sie Kundeninformationen und senden Sie automatisierte Bestätigungen.',
        'services.upsell.title': 'Optionale Upsell-Funktionen',
        'services.upsell.desc': 'Treuepunkte, Rabattcodes, Kundenfeedback, Online-Lieferung - verfügbar als kostenpflichtige Upgrades zur Verbesserung der Kundenerfahrung Ihres Restaurants und Steigerung des Umsatzes.',
        'services.analytics.title': 'Finanzanalysen & Berichte',
        'services.analytics.desc': 'Umfassende Einkommensverfolgung mit detaillierten Finanzberichten, Gewinnanalysen und Umsatzeinblicken. Exportieren Sie Daten für die Buchhaltung und treffen Sie fundierte Geschäftsentscheidungen mit erweiterten Analysen.',
        'services.professional-website.feature1': 'Benutzerdefinierte Domain und professionelles Design',
        'services.professional-website.feature2': 'SEO-optimiert für lokale Suche',
        'services.professional-website.feature3': 'Mobil-responsive Layout',
        'services.professional-website.feature4': 'Social Media Integration',
        'services.qr-ordering.feature1': 'Berührungslose Bestellerfahrung',
        'services.qr-ordering.feature2': 'Eindeutige QR-Codes pro Tisch',
        'services.qr-ordering.feature3': 'Sofortige Bestellbenachrichtigungen',
        'services.qr-ordering.feature4': 'Mehrsprachige Unterstützung',
        'services.payments.feature1': 'Mehrere Zahlungsgateways',
        'services.payments.feature2': 'Sichere Transaktionsverarbeitung',
        'services.payments.feature3': 'Rechnungsaufteilungsfunktion',
        'services.payments.feature4': 'Quittungsgenerierung',
        'services.dashboard.feature1': 'Echtzeit-Verkaufsverfolgung',
        'services.dashboard.feature2': 'Gewinn- und Verlustberichte',
        'services.dashboard.feature3': 'Umsatzanalysen',
        'services.dashboard.feature4': 'Datenexport für Buchhaltung',
        'services.notifications.feature1': 'Echtzeit-Bestellbenachrichtigungen',
        'services.notifications.feature2': 'Mehrere Benachrichtigungsmethoden',
        'services.notifications.feature3': 'Küchendrucker-Integration',
        'services.notifications.feature4': 'Bestellstatusverfolgung',
        'services.reservations.feature1': 'Online-Tischbuchung',
        'services.reservations.feature2': 'Verfügbarkeitsverwaltung',
        'services.reservations.feature3': 'Automatisierte Bestätigungen',
        'services.reservations.feature4': 'Kundeninformationssammlung',
        'services.upsell.feature1': 'Treuepunkte-System',
        'services.upsell.feature2': 'Rabattcodes & Aktionen',
        'services.upsell.feature3': 'Kundenfeedback-Sammlung',
        'services.upsell.feature4': 'Online-Lieferung Integration',
        'services.analytics.feature1': 'Detaillierte Finanzberichte',
        'services.analytics.feature2': 'Gewinnanalyse & Einblicke',
        'services.analytics.feature3': 'Umsatztrend-Analyse',
        'services.analytics.feature4': 'Buchhaltungsdaten-Export',
        'nav.home': 'Startseite',
        'nav.services': 'Services',
        'nav.benefits': 'Vorteile',
        'nav.contact': 'Kontakt',
        'nav.book-demo': 'Demo buchen',
        'cta.title': 'Bereit, Ihr Restaurant zu transformieren?',
        'cta.subtitle': 'Schließen Sie sich Hunderten von Restaurants an, die bereits unser Smart Menu System nutzen, um Effizienz zu steigern, Kundenerfahrung zu verbessern und Umsatz zu steigern.',
        'cta.book-demo': 'Demo buchen',
        'cta.contact': 'Kontaktieren Sie uns',
        
        // Newsletter Section
        'newsletter.title': 'Newsletter',
        'newsletter.heading': 'Bleiben Sie immer in Kontakt',
        'newsletter.description': 'Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo',
        'newsletter.placeholder': 'Ihre E-Mail eingeben',
        
        // Testimonial Section
        'testimonial.title': 'Testimonial',
        'testimonial.heading': 'Was sagen unsere Kunden!',
        'testimonial.text': 'Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.',
        'testimonial.client-name': 'Kundenname',
        'testimonial.profession': 'Beruf',
        
        // Footer Section
        'footer.newsletter-title': 'Newsletter',
        'footer.newsletter-desc': 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu',
        'footer.email-placeholder': 'Ihre E-Mail',
        
        // Hero Section
        'hero.go-digital': 'DIGITAL WERDEN',
        'hero.title': 'Intelligentes Restaurant/Café Bestellsystem',
        'hero.subtitle': 'Verwandeln Sie Ihr Restaurant/Café mit unserer kompletten digitalen Menülösung. QR-Code-Bestellung, Tischreservierungen, flexible Zahlungen und Echtzeit-Analysen - alles in einer Plattform.',
        'hero.ai-feature': 'Angetrieben von personalisierter KI',
        'hero.ai-description': 'Verwandeln Sie Ihr PDF-Menü in ein nahtloses, wunderschön gestaltetes digitales Erlebnis mit unserer intelligenten KI-Technologie.',
        'hero.see-features': 'Features ansehen',
        'hero.book-demo': 'Demo buchen',
        
        // Benefits Section
        'benefits.title': 'Warum mit uns zusammenarbeiten?',
        'benefits.subtitle': 'Verwandeln Sie Ihre Restaurantbetriebe mit unserem digitalen Menüsystem. Bauen Sie Ihre Marke mit einer professionellen Website auf, verwalten Sie Einnahmen über unser umfassendes Dashboard, steigern Sie die Marketingreichweite, optimieren Sie den Betrieb mit Online-Reservierungen und verbessern Sie die Kundenzufriedenheit.',
        'benefits.income-improvement': 'Einkommensverbesserung',
        'benefits.customer-experience': 'Kundenerfahrungsverbesserung',
        'benefits.online-reservation': 'Online-Reservierungssystem',
        'benefits.income-management': 'Einkommensverwaltungs-Dashboard',
        'benefits.ai-transformation': 'KI-gestützte Menü-Transformation',
        'benefits.see-services': 'Unsere Dienstleistungen ansehen',
        
        // Demo Form
        'demo.title': 'Sehen Sie, wie unser System für Ihr Restaurant/Café funktioniert',
        'demo.subtitle': 'Geben Sie Ihre Daten ein und wir werden uns per E-Mail bei Ihnen melden, um Ihre personalisierte Demo zu planen.',
        'demo.restaurant-name': 'Restaurant/Café Name',
        'demo.owner-name': 'Ihr Name',
        'demo.email': 'Ihre E-Mail',
        'demo.phone': 'Telefonnummer',
        'demo.address': 'Restaurant-Adresse',
        'demo.message': 'Erzählen Sie uns von Ihrem Restaurant/Café und was Sie in der Demo sehen möchten',
        'demo.submit': 'Meine Demo buchen',
        'demo.submitting': 'Wird übermittelt...',
        'demo.success': 'Vielen Dank! Ihre Demo-Anfrage wurde erfolgreich übermittelt. Wir werden uns bald bei Ihnen melden, um Ihre Demo zu planen.',
        'demo.error': 'Entschuldigung, beim Übermitteln Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
        
        // Footer
        'footer.contact-info': 'Kontaktinformationen',
        'footer.follow-us': 'Folgen Sie uns',
        'footer.our-location': 'Unser Standort',
        
        // User Flow Stepper
        'user-flow.title': 'Wie es funktioniert',
        'user-flow.subtitle': 'Einfache Schritte zum digitalen Erfolg',
        'user-flow.description': 'Erleben Sie die nahtlose Reise vom QR-Code-Scannen bis zur Bestellabwicklung und Geschäftsverwaltung.',
        'user-flow.step1.title': 'QR-Code scannen',
        'user-flow.step1.description': 'Der Kunde scannt den eindeutigen QR-Code an seinem Tisch, um sofort auf das digitale Menü zuzugreifen.',
        'user-flow.step2.title': 'KI-transformiertes Menü durchsuchen',
        'user-flow.step2.description': 'Erkunden Sie unser wunderschön gestaltetes digitales Menü, transformiert aus Ihrem PDF mit unserer personalisierten KI-Technologie. Hochwertige Bilder, Beschreibungen und Echtzeit-Verfügbarkeit.',
        'user-flow.step3.title': 'Bestellung aufgeben',
        'user-flow.step3.description': 'Wählen Sie Artikel aus, passen Sie Bestellungen an und bezahlen Sie sicher über mehrere Zahlungsoptionen.',
        'user-flow.step4.title': 'Sofortige Benachrichtigung',
        'user-flow.step4.description': 'Der Restaurantbesitzer erhält sofortige Bestellbenachrichtigungen über Tablet, Smartphone oder Küchendrucker.',
        'user-flow.step5.title': 'Bestellverfolgung',
        'user-flow.step5.description': 'Der Kunde erhält Bestellbestätigung und Echtzeit-Countdown-Timer über die App.',
        'user-flow.step6.title': 'Erfahrung genießen',
        'user-flow.step6.description': 'Der Kunde erhält seine Bestellung und genießt eine nahtlose, kontaktlose Essenserfahrung.',
        'user-flow.step7.title': 'Dashboard-Verwaltung',
        'user-flow.step7.description': 'Alle Bestellungen und Kundendaten werden in Ihrem Dashboard für Einkommensverfolgung und Geschäftsskalierbarkeit gespeichert.',
        'user-flow.step8.title': 'Kundenbindung',
        'user-flow.step8.description': 'Erstellen Sie exklusive Gutscheincodes für Rabatte und senden Sie personalisierte Marketing-E-Mails, um Kunden engagiert zu halten und sie zurück in Ihr Restaurant/Café zu bringen.',
        
        // Website Integration Flow
        'website-flow.title': 'Website-Integration',
        'website-flow.subtitle': 'Nahtlose Website-Lösungen für jedes Unternehmen',
        'website-flow.description': 'Ob Sie eine bestehende Website haben oder eine benötigen, wir bieten vollständige Lösungen zur nahtlosen Integration unseres digitalen Menüsystems.',
        'website-flow.step1.title': 'Website-Erstellung oder Integration',
        'website-flow.step1.description': 'Für Restaurants/Cafés ohne Website erstellen wir eine kreative, professionelle Website. Für bestehende Websites bieten wir einfache API-Integration zur Menüimplementierung in Minuten.',
        'website-flow.step2.title': 'Menü-Implementierung',
        'website-flow.step2.description': 'Wir implementieren Ihr digitales Menü direkt in Ihre Website mit hochwertigen Bildern, Beschreibungen und Echtzeit-Preisupdates.',
        'website-flow.step3.title': 'Online-Tischreservierungen',
        'website-flow.step3.description': 'Wir implementieren das Online-Tischreservierungssystem sowohl für neu erstellte als auch bestehende Websites durch einfache Integration.',
        'website-flow.step4.title': 'Reservierungsbenachrichtigungen',
        'website-flow.step4.description': 'Der Administrator erhält alle Reservierungsaufträge sofort im Dashboard mit Kundendetails und Präferenzen.',
        'website-flow.step5.title': 'Reservierungsbestätigung',
        'website-flow.step5.description': 'Der Kunde erhält sofortige Bestätigung seiner Reservierung mit Details und besonderen Anweisungen.',
        'website-flow.step6.title': 'Verbesserte Erfahrung',
        'website-flow.step6.description': 'Der Kunde genießt eine nahtlose Erfahrung mit Online-Reservierungen, und der Geschäftsinhaber steigert Einkommen und Kundenzufriedenheit.',
        
        // Marketing & Customer Engagement
        'marketing.title': 'Kundenbindung',
        'marketing.subtitle': 'Bauen Sie dauerhafte Beziehungen zu Ihren Kunden auf',
        'marketing.description': 'Halten Sie Ihre Kunden engagiert und bringen Sie sie zurück mit personalisiertem E-Mail-Marketing, exklusiven Angeboten und Treuebelohnungen.',
        'marketing.email-updates.title': 'E-Mail-Updates & Newsletter',
        'marketing.email-updates.description': 'Senden Sie personalisierte E-Mail-Updates über neue Menüpunkte, besondere Veranstaltungen und Restaurantnachrichten, um Kunden informiert und engagiert zu halten.',
        'marketing.coupon-codes.title': 'Exklusive Gutscheincodes',
        'marketing.coupon-codes.description': 'Erstellen und verteilen Sie exklusive Rabattcodes und Werbeaktionen, um treue Kunden zu belohnen und neue anzuziehen.',
        'marketing.birthday-offers.title': 'Geburtstags- & besondere Anlässe',
        'marketing.birthday-offers.description': 'Senden Sie automatisch Geburtstagswünsche mit besonderen Angeboten und feiern Sie Kundenmeilensteine, um Beziehungen zu stärken.',
        'marketing.analytics.title': 'Kundenanalysen & Einblicke',
        'marketing.analytics.description': 'Verfolgen Sie Kundenverhalten, Präferenzen und Engagement-Metriken, um Ihre Marketingkampagnen zu optimieren und die Kundenzufriedenheit zu verbessern.',
        'marketing.dashboard.title': 'Marketing-Dashboard',
        'marketing.dashboard.new-campaign': 'Neue Kampagne',
        'marketing.dashboard.view-analytics': 'Analysen anzeigen',
        'marketing.dashboard.campaign1': 'Sommer-Menü-Lancierung',
        'marketing.dashboard.campaign1-stats': 'An 1.250 Kunden gesendet • 85% Öffnungsrate',
        'marketing.dashboard.campaign2': 'Wochenend-Special-Angebot',
        'marketing.dashboard.campaign2-stats': 'An 890 Kunden gesendet • 92% Öffnungsrate',
        'marketing.dashboard.campaign3': 'Geburtstags-Kampagne',
        'marketing.dashboard.campaign3-stats': 'Automatisch an 45 Kunden diesen Monat gesendet',
        'marketing.dashboard.coupon-title': 'Aktive Gutscheincodes',
        'marketing.dashboard.coupon-discount': '20% Rabatt',
        'marketing.dashboard.coupon-discount2': '$10 Rabatt auf erste Bestellung'
    },
    ar: {
        'services.section-title': 'ميزاتنا',
        'services.title': 'نظام قوائم مطعم شامل',
        'services.subtitle': 'اكتشف جميع المميزات القوية التي تجعل نظام القوائم الذكي لمطعم/مقهى الخاص بنا الحل المثالي لعملك.',
        'services.professional-website.title': 'موقع علامة تجارية احترافي',
        'services.professional-website.desc': 'ابني الحضور الرقمي لمطعمك مع موقع ويب مخصص يحتوي على قائمتك، صور عالية الجودة، وقصة علامتك التجارية. مثالي لتحسين محركات البحث، تسويق وسائل التواصل الاجتماعي، وإرساء المصداقية المهنية عبر الإنترنت.',
        'services.qr-ordering.title': 'نظام طلبات QR',
        'services.qr-ordering.desc': 'أحدث ثورة في خدمتك مع الطلبات بدون لمس. كل طاولة تحصل على رمز QR فريد يمسحه العملاء للوصول إلى قائمتك الرقمية، ووضع الطلبات، والدفع فوراً. يقلل أوقات الانتظار ويحسن تجربة العملاء بشكل كبير.',
        'services.payments.title': 'حلول دفع مرنة',
        'services.payments.desc': 'اقبل المدفوعات عبر الإنترنت أو شخصياً مع نظام الدفع المتكامل الخاص بنا. دعم Stripe وPayPal وبوابات الدفع الشائعة الأخرى يضمن المعاملات الآمنة وراحة العملاء. تعامل مع الفواتير المقسمة وولد الإيصالات تلقائياً.',
        'services.dashboard.title': 'لوحة إدارة الدخل',
        'services.dashboard.desc': 'تحكم كامل في أموال مطعمك مع تتبع الدخل في الوقت الفعلي، تحليلات المبيعات، تقارير الأرباح، ورؤى الإيرادات. اتخذ قرارات عمل مدروسة مع بيانات مالية شاملة وإمكانيات تصدير للمحاسبة.',
        'services.notifications.title': 'إشعارات الطلبات الفورية',
        'services.notifications.desc': 'لا تفوت أي طلب مع نظام الإشعارات الفوري الخاص بنا. يحصل الموظفون على تنبيهات فورية عبر الجهاز اللوحي أو الهاتف الذكي أو طابعة المطبخ، مما يضمن خدمة أسرع ورضا أفضل للعملاء. تتبع حالة الطلب في الوقت الفعلي.',
        'services.reservations.title': 'نظام الحجز عبر الإنترنت',
        'services.reservations.desc': 'بسط عملية الحجز مع نظام الحجز عبر الإنترنت المتكامل الخاص بنا. يمكن للعملاء حجز الطاولات مباشرة من موقعك الإلكتروني بينما تدير التوفر والتأكيدات من لوحة التحكم الخاصة بك. اجمع معلومات العملاء وأرسل تأكيدات آلية.',
        'services.upsell.title': 'ميزات البيع الإضافي الاختيارية',
        'services.upsell.desc': 'نقاط الولاء، أكواد الخصم، ملاحظات العملاء، التوصيل عبر الإنترنت - متاحة كترقيات مدفوعة لتحسين تجربة عملاء مطعمك وزيادة الإيرادات.',
        'services.analytics.title': 'التحليلات المالية والتقارير',
        'services.analytics.desc': 'تتبع شامل للإيرادات مع تقارير مالية مفصلة، تحليل الأرباح، ورؤى الإيرادات. تصدير البيانات للمحاسبة واتخاذ قرارات عمل مدروسة مع تحليلات متقدمة.',
        'services.professional-website.feature1': 'نطاق مخصص وتصميم احترافي',
        'services.professional-website.feature2': 'محسن لمحركات البحث للبحث المحلي',
        'services.professional-website.feature3': 'تخطيط متجاوب مع الهاتف المحمول',
        'services.professional-website.feature4': 'تكامل وسائل التواصل الاجتماعي',
        'services.qr-ordering.feature1': 'تجربة طلب بدون لمس',
        'services.qr-ordering.feature2': 'رموز QR فريدة لكل طاولة',
        'services.qr-ordering.feature3': 'إشعارات طلب فورية',
        'services.qr-ordering.feature4': 'دعم متعدد اللغات',
        'services.payments.feature1': 'بوابات دفع متعددة',
        'services.payments.feature2': 'معالجة معاملات آمنة',
        'services.payments.feature3': 'وظيفة تقسيم الفاتورة',
        'services.payments.feature4': 'توليد الإيصالات',
        'services.dashboard.feature1': 'تتبع المبيعات في الوقت الفعلي',
        'services.dashboard.feature2': 'تقارير الأرباح والخسائر',
        'services.dashboard.feature3': 'تحليلات الإيرادات',
        'services.dashboard.feature4': 'تصدير البيانات للمحاسبة',
        'services.notifications.feature1': 'تنبيهات طلب في الوقت الفعلي',
        'services.notifications.feature2': 'طرق إشعار متعددة',
        'services.notifications.feature3': 'تكامل طابعة المطبخ',
        'services.notifications.feature4': 'تتبع حالة الطلب',
        'services.reservations.feature1': 'حجز الطاولات عبر الإنترنت',
        'services.reservations.feature2': 'إدارة التوفر',
        'services.reservations.feature3': 'تأكيدات آلية',
        'services.reservations.feature4': 'جمع معلومات العملاء',
        'services.upsell.feature1': 'نظام نقاط الولاء',
        'services.upsell.feature2': 'أكواد الخصم والعروض',
        'services.upsell.feature3': 'جمع ملاحظات العملاء',
        'services.upsell.feature4': 'تكامل التوصيل عبر الإنترنت',
        'services.analytics.feature1': 'تقارير مالية مفصلة',
        'services.analytics.feature2': 'تحليل الأرباح والرؤى',
        'services.analytics.feature3': 'تحليل اتجاهات الإيرادات',
        'services.analytics.feature4': 'تصدير بيانات المحاسبة',
        'nav.home': 'الرئيسية',
        'nav.services': 'الخدمات',
        'nav.benefits': 'المزايا',
        'nav.contact': 'اتصل بنا',
        'nav.book-demo': 'احجز عرض تجريبي',
        'cta.title': 'مستعد لتحويل مطعمك؟',
        'cta.subtitle': 'انضم إلى مئات المطاعم التي تستخدم بالفعل نظام القوائم الذكي الخاص بنا لزيادة الكفاءة وتحسين تجربة العملاء وزيادة الإيرادات.',
        'cta.book-demo': 'احجز عرض تجريبي',
        'cta.contact': 'اتصل بنا',
        
        // Newsletter Section
        'newsletter.title': 'النشرة الإخبارية',
        'newsletter.heading': 'ابق على تواصل دائم',
        'newsletter.description': 'Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo',
        'newsletter.placeholder': 'أدخل بريدك الإلكتروني',
        
        // Testimonial Section
        'testimonial.title': 'الشهادات',
        'testimonial.heading': 'ماذا يقول عملاؤنا!',
        'testimonial.text': 'Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.',
        'testimonial.client-name': 'اسم العميل',
        'testimonial.profession': 'المهنة',
        
        // Footer Section
        'footer.newsletter-title': 'النشرة الإخبارية',
        'footer.newsletter-desc': 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu',
        'footer.email-placeholder': 'بريدك الإلكتروني',
        
        // Hero Section
        'hero.go-digital': 'كن رقمياً',
        'hero.title': 'نظام طلبات مطعم/مقهى ذكي',
        'hero.subtitle': 'حول مطعمك/مقهاك مع حلولنا الرقمية الشاملة للقوائم. طلبات QR، حجوزات الطاولات، مدفوعات مرنة، وتحليلات فورية - كل شيء في منصة واحدة.',
        'hero.ai-feature': 'مدعوم بالذكاء الاصطناعي المخصص',
        'hero.ai-description': 'حول قائمة PDF الخاصة بك إلى تجربة رقمية سلسة ومصممة بشكل جميل باستخدام تقنية الذكاء الاصطناعي الذكية.',
        'hero.see-features': 'شاهد المميزات',
        'hero.book-demo': 'احجز عرض تجريبي',
        
        // Benefits Section
        'benefits.title': 'لماذا تتعاون معنا؟',
        'benefits.subtitle': 'حول عمليات مطعمك مع نظام القوائم الرقمي الخاص بنا. ابني علامتك التجارية مع موقع ويب احترافي، وأدر الدخل من خلال لوحة التحكم الشاملة، وزد من وصول التسويق، وتبسيط العمليات مع الحجوزات عبر الإنترنت وتحسين رضا العملاء.',
        'benefits.income-improvement': 'تحسين الدخل',
        'benefits.customer-experience': 'تحسين تجربة العملاء',
        'benefits.online-reservation': 'نظام الحجز عبر الإنترنت',
        'benefits.income-management': 'لوحة إدارة الدخل',
        'benefits.ai-transformation': 'تحويل القائمة بالذكاء الاصطناعي',
        'benefits.see-services': 'شاهد خدماتنا',
        
        // Demo Form
        'demo.title': 'شاهد كيف يعمل نظامنا لمطعمك/مقهاك',
        'demo.subtitle': 'أدخل بياناتك وسنتواصل معك عبر البريد الإلكتروني لجدولة عرضك التجريبي المخصص.',
        'demo.restaurant-name': 'اسم المطعم/المقهى',
        'demo.owner-name': 'اسمك',
        'demo.email': 'بريدك الإلكتروني',
        'demo.phone': 'رقم الهاتف',
        'demo.address': 'عنوان المطعم',
        'demo.message': 'أخبرنا عن مطعمك/مقهاك وما تريد رؤيته في العرض التجريبي',
        'demo.submit': 'احجز عرضي التجريبي',
        'demo.submitting': 'جاري الإرسال...',
        'demo.success': 'شكراً لك! تم إرسال طلب العرض التجريبي بنجاح. سنتواصل معك قريباً لجدولة عرضك التجريبي.',
        'demo.error': 'عذراً، حدث خطأ في إرسال طلبك. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.',
        
        // Footer
        'footer.contact-info': 'معلومات الاتصال',
        'footer.follow-us': 'تابعنا',
        'footer.our-location': 'موقعنا',
        
        // User Flow Stepper
        'user-flow.title': 'كيف يعمل النظام',
        'user-flow.subtitle': 'خطوات بسيطة نحو النجاح الرقمي',
        'user-flow.description': 'استمتع برحلة سلسة من مسح رمز QR إلى إكمال الطلب وإدارة الأعمال.',
        'user-flow.step1.title': 'مسح رمز QR',
        'user-flow.step1.description': 'يُمسح العميل رمز QR الفريد على طاولته للوصول إلى القائمة الرقمية فوراً.',
        'user-flow.step2.title': 'تصفح القائمة المحولة بالذكاء الاصطناعي',
        'user-flow.step2.description': 'استكشف قائمتنا الرقمية المصممة بشكل جميل، المحولة من ملف PDF الخاص بك باستخدام تقنية الذكاء الاصطناعي المخصصة. صور عالية الجودة والأوصاف والتوفر في الوقت الفعلي.',
        'user-flow.step3.title': 'تقديم الطلب',
        'user-flow.step3.description': 'اختر العناصر، وقم بتخصيص الطلبات، وادفع بأمان من خلال خيارات دفع متعددة.',
        'user-flow.step4.title': 'إشعار فوري',
        'user-flow.step4.description': 'يحصل صاحب المطعم على إشعار فوري للطلب عبر الجهاز اللوحي أو الهاتف الذكي أو طابعة المطبخ.',
        'user-flow.step5.title': 'تتبع الطلب',
        'user-flow.step5.description': 'يحصل العميل على تأكيد الطلب ومؤقت العد التنازلي في الوقت الفعلي من خلال التطبيق.',
        'user-flow.step6.title': 'استمتع بالتجربة',
        'user-flow.step6.description': 'يحصل العميل على طلبه ويستمتع بتجربة طعام سلسة بدون تلامس.',
        'user-flow.step7.title': 'إدارة لوحة التحكم',
        'user-flow.step7.description': 'يتم تخزين جميع الطلبات وبيانات العملاء في لوحة التحكم الخاصة بك لتتبع الدخل وقابلية توسع الأعمال.',
        'user-flow.step8.title': 'إشراك العملاء',
        'user-flow.step8.description': 'أنشئ أكواد كوبونات حصرية للخصومات وأرسل رسائل بريد إلكتروني تسويقية مخصصة لإبقاء العملاء منخرطين وجذبهم للعودة إلى مطعمك/مقهاك.',
        
        // Website Integration Flow
        'website-flow.title': 'تكامل الموقع الإلكتروني',
        'website-flow.subtitle': 'حلول مواقع إلكترونية سلسة لكل الأعمال',
        'website-flow.description': 'سواء كان لديك موقع إلكتروني موجود أو تحتاج إلى إنشاء واحد، نحن نقدم حلولاً شاملة لدمج نظام القوائم الرقمي الخاص بنا بسلاسة.',
        'website-flow.step1.title': 'إنشاء أو تكامل الموقع الإلكتروني',
        'website-flow.step1.description': 'للمطاعم/المقاهي بدون موقع إلكتروني، نحن ننشئ موقعاً إلكترونياً إبداعياً ومهنياً. للمواقع الموجودة، نوفر تكاملاً بسيطاً للـ API لتنفيذ القائمة في دقائق.',
        'website-flow.step2.title': 'تنفيذ القائمة',
        'website-flow.step2.description': 'نقوم بتنفيذ قائمتك الرقمية مباشرة في موقعك الإلكتروني مع صور عالية الجودة والأوصاف وتحديثات الأسعار في الوقت الفعلي.',
        'website-flow.step3.title': 'حجز الطاولات عبر الإنترنت',
        'website-flow.step3.description': 'نقوم بتنفيذ نظام حجز الطاولات عبر الإنترنت لكل من المواقع المُنشأة حديثاً والموجودة من خلال تكامل بسيط.',
        'website-flow.step4.title': 'إشعارات الحجز',
        'website-flow.step4.description': 'يحصل المدير على جميع طلبات الحجز فوراً في لوحة التحكم مع تفاصيل العملاء والتفضيلات.',
        'website-flow.step5.title': 'تأكيد الحجز',
        'website-flow.step5.description': 'يحصل العميل على تأكيد فوري لحجزه مع التفاصيل وأي تعليمات خاصة.',
        'website-flow.step6.title': 'تجربة محسنة',
        'website-flow.step6.description': 'يستمتع العميل بتجربة سلسة مع الحجوزات عبر الإنترنت، ويزيد صاحب المتجر من دخله ورضا العملاء.',
        
        // Marketing & Customer Engagement
        'marketing.title': 'إشراك العملاء',
        'marketing.subtitle': 'بناء علاقات دائمة مع عملائك',
        'marketing.description': 'اجعل عملائك منخرطين ومكررين مع التسويق عبر البريد الإلكتروني المخصص والعروض الحصرية ومكافآت الولاء.',
        'marketing.email-updates.title': 'تحديثات البريد الإلكتروني والنشرات الإخبارية',
        'marketing.email-updates.description': 'أرسل تحديثات بريد إلكتروني مخصصة حول عناصر القائمة الجديدة والأحداث الخاصة وأخبار المطعم لإبقاء العملاء على اطلاع ومنخرطين.',
        'marketing.coupon-codes.title': 'أكواد الكوبونات الحصرية',
        'marketing.coupon-codes.description': 'أنشئ ووزع أكواد الخصم الحصرية والعروض الترويجية لمكافأة العملاء المخلصين وجذب عملاء جدد.',
        'marketing.birthday-offers.title': 'عروض أعياد الميلاد والمناسبات الخاصة',
        'marketing.birthday-offers.description': 'أرسل تلقائياً تمنيات عيد الميلاد مع عروض خاصة واحتفل بمعالم العملاء لتقوية العلاقات.',
        'marketing.analytics.title': 'تحليلات العملاء والرؤى',
        'marketing.analytics.description': 'تتبع سلوك العملاء والتفضيلات ومقاييس المشاركة لتحسين حملاتك التسويقية وتحسين رضا العملاء.',
        'marketing.dashboard.title': 'لوحة تحكم التسويق',
        'marketing.dashboard.new-campaign': 'حملة جديدة',
        'marketing.dashboard.view-analytics': 'عرض التحليلات',
        'marketing.dashboard.campaign1': 'إطلاق قائمة الصيف',
        'marketing.dashboard.campaign1-stats': 'أُرسل إلى 1,250 عميل • معدل فتح 85%',
        'marketing.dashboard.campaign2': 'عرض خاص لعطلة نهاية الأسبوع',
        'marketing.dashboard.campaign2-stats': 'أُرسل إلى 890 عميل • معدل فتح 92%',
        'marketing.dashboard.campaign3': 'حملة أعياد الميلاد',
        'marketing.dashboard.campaign3-stats': 'أُرسل تلقائياً إلى 45 عميل هذا الشهر',
        'marketing.dashboard.coupon-title': 'أكواد الكوبونات النشطة',
        'marketing.dashboard.coupon-discount': 'خصم 20%',
        'marketing.dashboard.coupon-discount2': 'خصم 10$ على الطلب الأول'
    },
    fr: {
        'services.section-title': 'Nos Services',
        'services.title': 'Système de Menu Restaurant Complet',
        'services.subtitle': 'Découvrez toutes les fonctionnalités puissantes qui font de notre système de menu restaurant/café intelligent la solution parfaite pour votre entreprise.',
        'services.professional-website.title': 'Site Web de Marque Professionnel',
        'services.professional-website.desc': 'Construisez la présence numérique de votre restaurant avec un site web personnalisé qui présente votre menu, des images de haute qualité et l\'histoire de votre marque. Parfait pour l\'optimisation SEO, le marketing des médias sociaux et l\'établissement de crédibilité professionnelle en ligne.',
        'services.qr-ordering.title': 'Système de Commande QR',
        'services.qr-ordering.desc': 'Révolutionnez votre service avec la commande sans contact. Chaque table reçoit un code QR unique que les clients scannent pour accéder à votre menu numérique, passer des commandes et payer instantanément. Réduit les temps d\'attente et améliore considérablement l\'expérience client.',
        'services.payments.title': 'Solutions de Paiement Flexibles',
        'services.payments.desc': 'Acceptez les paiements en ligne et en personne avec notre système de paiement intégré. Support pour Stripe, PayPal et autres passerelles de paiement populaires garantit des transactions sécurisées et la satisfaction client. Gérez les factures partagées et générez automatiquement des reçus.',
        'services.dashboard.title': 'Tableau de Bord de Gestion des Revenus',
        'services.dashboard.desc': 'Prenez le contrôle total des finances de votre restaurant avec le suivi des revenus en temps réel, les analyses de ventes, les rapports de profit et les insights de revenus. Prenez des décisions commerciales éclairées avec des données financières complètes et des fonctions d\'exportation pour la comptabilité.',
        'services.notifications.title': 'Notifications de Commande Instantanées',
        'services.notifications.desc': 'Ne manquez jamais une commande avec notre système de notification instantané. Le personnel reçoit des alertes immédiates via tablette, smartphone ou imprimante de cuisine, garantissant un service plus rapide et une meilleure satisfaction client. Suivez le statut des commandes en temps réel.',
        'services.reservations.title': 'Système de Réservation en Ligne',
        'services.reservations.desc': 'Optimisez votre processus de réservation avec notre système de réservation en ligne intégré. Les clients peuvent réserver des tables directement depuis votre site web, tandis que vous gérez la disponibilité et les confirmations depuis votre tableau de bord. Collectez les informations clients et envoyez des confirmations automatisées.',
        'services.upsell.title': 'Fonctionnalités Upsell Optionnelles',
        'services.upsell.desc': 'Points de fidélité, codes de réduction, feedback client, livraison en ligne - disponibles comme mises à niveau payantes pour améliorer l\'expérience client de votre restaurant et augmenter les revenus.',
        'services.analytics.title': 'Analyses Financières et Rapports',
        'services.analytics.desc': 'Suivi complet des revenus avec des rapports financiers détaillés, analyses de profit et insights de revenus. Exportez les données pour la comptabilité et prenez des décisions commerciales éclairées avec des analyses avancées.',
        'services.professional-website.feature1': 'Domaine personnalisé et design professionnel',
        'services.professional-website.feature2': 'Optimisé SEO pour la recherche locale',
        'services.professional-website.feature3': 'Mise en page responsive mobile',
        'services.professional-website.feature4': 'Intégration des médias sociaux',
        'services.qr-ordering.feature1': 'Expérience de commande sans contact',
        'services.qr-ordering.feature2': 'Codes QR uniques par table',
        'services.qr-ordering.feature3': 'Notifications de commande instantanées',
        'services.qr-ordering.feature4': 'Support multilingue',
        'services.payments.feature1': 'Plusieurs passerelles de paiement',
        'services.payments.feature2': 'Traitement sécurisé des transactions',
        'services.payments.feature3': 'Fonction de division de facture',
        'services.payments.feature4': 'Génération de reçus',
        'services.dashboard.feature1': 'Suivi des ventes en temps réel',
        'services.dashboard.feature2': 'Rapports de profit et perte',
        'services.dashboard.feature3': 'Analyses de revenus',
        'services.dashboard.feature4': 'Export de données pour comptabilité',
        'services.notifications.feature1': 'Notifications de commande en temps réel',
        'services.notifications.feature2': 'Plusieurs méthodes de notification',
        'services.notifications.feature3': 'Intégration imprimante cuisine',
        'services.notifications.feature4': 'Suivi du statut des commandes',
        'services.reservations.feature1': 'Réservation de table en ligne',
        'services.reservations.feature2': 'Gestion de la disponibilité',
        'services.reservations.feature3': 'Confirmations automatisées',
        'services.reservations.feature4': 'Collecte d\'informations client',
        'services.upsell.feature1': 'Système de points de fidélité',
        'services.upsell.feature2': 'Codes de réduction et promotions',
        'services.upsell.feature3': 'Collecte de feedback client',
        'services.upsell.feature4': 'Intégration livraison en ligne',
        'services.analytics.feature1': 'Rapports financiers détaillés',
        'services.analytics.feature2': 'Analyse de profit et insights',
        'services.analytics.feature3': 'Analyse des tendances de revenus',
        'services.analytics.feature4': 'Export de données comptables',
        'nav.home': 'Accueil',
        'nav.services': 'Services',
        'nav.benefits': 'Avantages',
        'nav.contact': 'Contact',
        'nav.book-demo': 'Réserver une Démo',
        'cta.title': 'Prêt à Transformer Votre Restaurant ?',
        'cta.subtitle': 'Rejoignez des centaines de restaurants qui utilisent déjà notre Système de Menu Intelligent pour augmenter l\'efficacité, améliorer l\'expérience client et stimuler les revenus.',
        'cta.book-demo': 'Réserver une Démo',
        'cta.contact': 'Nous Contacter',
        
        // Newsletter Section
        'newsletter.title': 'Newsletter',
        'newsletter.heading': 'Restez Toujours en Contact',
        'newsletter.description': 'Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo',
        'newsletter.placeholder': 'Entrez votre email',
        'newsletter.subscribe': 'S\'abonner',
        
        // Footer
        'footer.contact-info': 'Informations de Contact',
        'footer.follow-us': 'Suivez-nous',
        'footer.quick-links': 'Liens Rapides',
        'footer.services': 'Services',
        'footer.newsletter-title': 'Newsletter',
        'footer.newsletter-desc': 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu',
        'footer.our-location': 'Notre Localisation',
        'footer.email-placeholder': 'Votre Email',
        
        // Hero Section
        'hero.go-digital': 'PASSEZ AU NUMÉRIQUE',
        'hero.title': 'Système de Commande Restaurant/Café Intelligent',
        'hero.subtitle': 'Transformez votre restaurant/café avec notre solution de menu numérique complète. Commandes QR, réservations de table, paiements flexibles et analyses en temps réel - tout dans une plateforme.',
        'hero.ai-feature': 'Alimenté par IA Personnalisée',
        'hero.ai-description': 'Transformez votre menu PDF en une expérience numérique fluide et magnifiquement conçue avec notre technologie IA intelligente.',
        'hero.see-features': 'Voir les Fonctionnalités',
        'hero.book-demo': 'Réserver une Démo',
        
        // Benefits Section
        'benefits.title': 'Pourquoi Partenariat Avec Nous ?',
        'benefits.subtitle': 'Transformez les opérations de votre restaurant avec notre système de menu numérique. Construisez votre marque avec un site web professionnel, gérez les revenus grâce à notre tableau de bord complet, boostez la portée marketing, rationalisez les opérations avec les réservations en ligne et améliorez la satisfaction client.',
        'benefits.income-improvement': 'Amélioration des Revenus',
        'benefits.customer-experience': 'Amélioration de l\'Expérience Client',
        'benefits.online-reservation': 'Système de Réservation en Ligne',
        'benefits.income-management': 'Tableau de Bord de Gestion des Revenus',
        'benefits.ai-transformation': 'Transformation de Menu par IA',
        'benefits.see-services': 'Voir Nos Services',
        
        // Demo Form
        'demo.title': 'Voyez Comment Notre Système Fonctionne pour Votre Restaurant/Café',
        'demo.subtitle': 'Entrez vos données et nous vous recontacterons par email pour planifier votre démo personnalisée.',
        'demo.restaurant-name': 'Nom du Restaurant/Café',
        'demo.owner-name': 'Votre Nom',
        'demo.email': 'Votre Email',
        'demo.phone': 'Votre Téléphone',
        'demo.address': 'Adresse du Restaurant/Café',
        'demo.message': 'Parlez-nous de votre restaurant/café et de ce que vous aimeriez voir dans la démo',
        'demo.submit': 'Réserver Ma Démo',
        'demo.submitting': 'Envoi en cours...',
        'demo.success': 'Merci ! Votre demande de démo a été soumise avec succès. Nous vous contacterons bientôt pour planifier votre démo.',
        'demo.error': 'Désolé, une erreur s\'est produite lors de l\'envoi de votre demande. Veuillez réessayer ou nous contacter directement.',
        
        // User Flow
        'user-flow.title': 'Comment Ça Marche',
        'user-flow.subtitle': 'Étapes Simples vers le Succès Numérique',
        'user-flow.description': 'Découvrez le parcours fluide du scan de code QR à la finalisation de commande et à la gestion d\'entreprise.',
        'user-flow.step1.title': 'Scanner le Code QR',
        'user-flow.step1.description': 'Le client scanne le code QR unique sur sa table pour accéder instantanément au menu numérique.',
        'user-flow.step2.title': 'Parcourir le Menu Transformé par IA',
        'user-flow.step2.description': 'Explorez notre menu numérique magnifiquement conçu, transformé à partir de votre PDF en utilisant notre technologie IA personnalisée. Images haute qualité, descriptions et disponibilité en temps réel.',
        'user-flow.step3.title': 'Passer Commande',
        'user-flow.step3.description': 'Sélectionnez les articles, personnalisez les commandes et payez en toute sécurité via plusieurs options de paiement.',
        'user-flow.step4.title': 'Notification Instantanée',
        'user-flow.step4.description': 'Le propriétaire du restaurant reçoit une notification de commande instantanée via tablette, smartphone ou imprimante de cuisine.',
        'user-flow.step5.title': 'Suivi de Commande',
        'user-flow.step5.description': 'Le client reçoit une confirmation de commande et un minuteur de compte à rebours en temps réel via l\'application.',
        'user-flow.step6.title': 'Profiter de l\'Expérience',
        'user-flow.step6.description': 'Le client reçoit sa commande et profite d\'une expérience de restauration fluide et sans contact.',
        'user-flow.step7.title': 'Gestion du Tableau de Bord',
        'user-flow.step7.description': 'Toutes les commandes et données client sont stockées dans votre tableau de bord pour le suivi des revenus et l\'évolutivité de l\'entreprise.',
        'user-flow.step8.title': 'Engagement Client',
        'user-flow.step8.description': 'Créez des codes de coupon exclusifs pour des réductions et envoyez des emails marketing personnalisés pour garder les clients engagés et revenir dans votre restaurant/café.',
        
        // Website Flow
        'website-flow.title': 'Intégration de Site Web',
        'website-flow.subtitle': 'Processus de Création et d\'Intégration de Site Web',
        'website-flow.description': 'Découvrez comment nous créons ou intégrons votre site web avec notre système de menu intelligent.',
        'website-flow.step1.title': 'Création ou Intégration de Site Web',
        'website-flow.step1.description': 'Nous créons un site web créatif pour votre restaurant/café ou fournissons une intégration API simple pour les sites existants.',
        'website-flow.step2.title': 'Implémentation du Menu',
        'website-flow.step2.description': 'Nous implémentons le menu sur le site web nouvellement créé ou existant en quelques minutes avec une intégration simple.',
        'website-flow.step3.title': 'Réservations de Table en Ligne',
        'website-flow.step3.description': 'Nous implémentons le système de réservation de table en ligne sur les sites web nouvellement créés et existants via une intégration simple.',
        'website-flow.step4.title': 'Notifications de Réservation',
        'website-flow.step4.description': 'L\'administrateur reçoit toutes les commandes de réservation instantanément dans le tableau de bord avec les détails et préférences du client.',
        'website-flow.step5.title': 'Confirmation de Réservation',
        'website-flow.step5.description': 'Le client reçoit une confirmation immédiate de sa réservation avec les détails et toute instruction spéciale.',
        'website-flow.step6.title': 'Expérience Améliorée',
        'website-flow.step6.description': 'Le client profite d\'une expérience fluide avec les réservations en ligne, et le propriétaire du magasin augmente les revenus et la satisfaction client.',
        
        // Marketing & Customer Engagement
        'marketing.title': 'Engagement Client',
        'marketing.subtitle': 'Construisez des Relations Durables avec Vos Clients',
        'marketing.description': 'Gardez vos clients engagés et revenant avec le marketing email personnalisé, les offres exclusives et les récompenses de fidélité.',
        'marketing.email-updates.title': 'Mises à Jour Email et Newsletter',
        'marketing.email-updates.description': 'Envoyez des mises à jour email personnalisées sur les nouveaux articles de menu, événements spéciaux et actualités du restaurant pour garder les clients informés et engagés.',
        'marketing.coupon-codes.title': 'Codes de Coupon Exclusifs',
        'marketing.coupon-codes.description': 'Créez et distribuez des codes de réduction exclusifs et des offres promotionnelles pour récompenser les clients fidèles et attirer de nouveaux clients.',
        'marketing.birthday-offers.title': 'Anniversaires et Occasions Spéciales',
        'marketing.birthday-offers.description': 'Envoyez automatiquement des vœux d\'anniversaire avec des offres spéciales et célébrez les jalons clients pour renforcer les relations.',
        'marketing.analytics.title': 'Analyses et Insights Client',
        'marketing.analytics.description': 'Suivez le comportement client, les préférences et les métriques d\'engagement pour optimiser vos campagnes marketing et améliorer la satisfaction client.',
        'marketing.dashboard.title': 'Tableau de Bord Marketing',
        'marketing.dashboard.new-campaign': 'Nouvelle Campagne',
        'marketing.dashboard.view-analytics': 'Voir les Analyses',
        'marketing.dashboard.campaign1': 'Lancement Menu Été',
        'marketing.dashboard.campaign1-stats': 'Envoyé à 1 250 clients • 85% taux d\'ouverture',
        'marketing.dashboard.campaign2': 'Offre Spéciale Weekend',
        'marketing.dashboard.campaign2-stats': 'Envoyé à 890 clients • 92% taux d\'ouverture',
        'marketing.dashboard.campaign3': 'Campagne Anniversaire',
        'marketing.dashboard.campaign3-stats': 'Envoyé automatiquement à 45 clients ce mois',
        'marketing.dashboard.coupon-title': 'Codes de Coupon Actifs',
        'marketing.dashboard.coupon-discount': '20% de Réduction',
        'marketing.dashboard.coupon-discount2': '10€ de Réduction Première Commande'
    }
};

// Simple translation function
function translatePage(language) {
    console.log('Translating to:', language);
    
    // Update document direction for Arabic
    if (language === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', language);
    }
    
    // Translate all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[language][key];
        if (translation) {
            if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email' || element.type === 'tel')) {
                element.placeholder = translation;
            } else if (element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
            console.log('Translated:', key, 'to:', translation);
        } else {
            console.warn('Translation not found for:', key);
        }
    });
    
    // Save language preference
    localStorage.setItem('selectedLanguage', language);
    
    // Update current language display
    updateCurrentLanguageDisplay();
    
    // Language display is now handled by updateCurrentLanguageDisplay()
}

// Initialize existing language switcher
function initializeLanguageSwitcher() {
    console.log('Initializing existing language switcher...');
    
    // Add click handlers to existing language options
    const languageOptions = document.querySelectorAll('.language-option');
    console.log('Found language options:', languageOptions.length);
    
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const lang = e.target.getAttribute('data-lang');
            console.log('Language option clicked:', lang);
            translatePage(lang);
        });
    });
    
    // Update current language display
    updateCurrentLanguageDisplay();
}

// Update current language display
function updateCurrentLanguageDisplay() {
    const currentLangSpan = document.getElementById('current-lang');
    if (currentLangSpan) {
            let savedLanguage = localStorage.getItem('selectedLanguage');
            if (!savedLanguage) {
                savedLanguage = 'en';
                localStorage.setItem('selectedLanguage', 'en');
            }
        const languageNames = {
            'en': '🇺🇸 English',
            'de': '🇩🇪 Deutsch',
                'fr': '🇫🇷 Français',
            'ar': '🇸🇦 العربية'
        };
        currentLangSpan.textContent = languageNames[savedLanguage] || '🇺🇸 English';
        
        // Update the button text for all languages
        const languageButton = document.getElementById('languageDropdown');
        if (languageButton) {
            const buttonText = languageButton.querySelector('span');
            if (buttonText) {
                if (savedLanguage === 'ar') {
                    buttonText.textContent = '🇸🇦 العربية +';
                    languageButton.style.direction = 'rtl';
                } else if (savedLanguage === 'fr') {
                    buttonText.textContent = '🇫🇷 Français';
                    languageButton.style.direction = 'ltr';
                } else if (savedLanguage === 'de') {
                    buttonText.textContent = '🇩🇪 Deutsch';
                    languageButton.style.direction = 'ltr';
                } else {
                    buttonText.textContent = '🇺🇸 English';
                    languageButton.style.direction = 'ltr';
                }
            }
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Simple translation system loaded');
    
    // Always default to English on first load
    let savedLanguage = localStorage.getItem('selectedLanguage');
    if (!savedLanguage) {
        savedLanguage = 'en';
        localStorage.setItem('selectedLanguage', 'en');
    }
    
    // Initialize existing language switcher
    initializeLanguageSwitcher();
    
    // Apply translations
    translatePage(savedLanguage);
    
    // Add event delegation for language options (fallback)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('language-option')) {
            e.preventDefault();
            e.stopPropagation();
            const lang = e.target.getAttribute('data-lang');
            console.log('Language option clicked via delegation:', lang);
            translatePage(lang);
        }
    });
    
    console.log('Translation system initialized with language:', savedLanguage);
});

// Manual test function - call from browser console
window.testTranslation = function(lang) {
    console.log('Manual translation test for:', lang);
    translatePage(lang);
};

// Reset to English function - call from browser console
window.resetToEnglish = function() {
    console.log('Resetting to English...');
    localStorage.setItem('selectedLanguage', 'en');
    translatePage('en');
};

// Manual language switcher test - call from browser console
window.testLanguageSwitcher = function() {
    console.log('Testing language switcher...');
    const switcher = document.getElementById('languageDropdown');
    if (switcher) {
        console.log('Language switcher found:', switcher);
    } else {
        console.log('Language switcher not found, creating...');
        createLanguageSwitcher();
    }
};
