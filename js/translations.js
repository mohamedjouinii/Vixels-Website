// Translation system for Vixels Restaurant Menu System
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.benefits': 'Benefits',
        'nav.contact': 'Contact',
        'nav.book-demo': 'Book a Demo',
        
        // Hero Section
        'hero.title': 'Smart Restaurant/Cafe Ordering System',
        'hero.subtitle': 'Transform your restaurant/cafe with our complete digital menu solution. QR code ordering, table reservations, flexible payments, and real-time analytics - all in one platform.',
        'hero.see-features': 'See Features',
        'hero.book-demo': 'Book a Demo',
        
        // Benefits Section
        'benefits.title': 'Why Partner With Us?',
        'benefits.subtitle': 'Transform your restaurant operations with our digital menu system. Build your brand with a professional website, manage income through our comprehensive dashboard, boost marketing reach, streamline operations with online reservations and customer satisfaction improvement.',
        'benefits.income-improvement': 'Income Improvement',
        'benefits.customer-experience': 'Customer Experience Enhancement',
        'benefits.online-reservation': 'Online Reservation System',
        'benefits.income-management': 'Income Management Dashboard',
        'benefits.see-services': 'See Our Services',
        
        // Services Section
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
        
        // Service Features Lists
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
        
        // Additional Services
        'services.upsell.title': 'Optional Upsell Features',
        'services.upsell.desc': 'Loyalty points, discount codes, customer feedback, online delivery - available as paid upgrades to enhance your restaurant\'s customer experience and increase revenue.',
        'services.upsell.feature1': 'Loyalty points system',
        'services.upsell.feature2': 'Discount codes & promotions',
        'services.upsell.feature3': 'Customer feedback collection',
        'services.upsell.feature4': 'Online delivery integration',
        
        'services.analytics.title': 'Financial Analytics & Reports',
        'services.analytics.desc': 'Comprehensive income tracking with detailed financial reports, profit analysis, and revenue insights. Export data for accounting and make informed business decisions with advanced analytics.',
        'services.analytics.feature1': 'Detailed financial reports',
        'services.analytics.feature2': 'Profit analysis & insights',
        'services.analytics.feature3': 'Revenue trend analysis',
        'services.analytics.feature4': 'Accounting data export',
        
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
        'demo.success': 'Thank you! Your demo request has been submitted successfully. We will contact you soon to schedule your demo.',
        'demo.error': 'Sorry, there was an error submitting your request. Please try again or contact us directly.',
        
        // Contact Form
        'contact.title': 'Contact For Any Query',
        'contact.subtitle': 'Ready to transform your restaurant/cafe with our Smart Menu System? Contact us today to schedule a demo or discuss how we can help streamline your operations.',
        'contact.name': 'Your Name',
        'contact.email': 'Your Email',
        'contact.subject': 'Subject',
        'contact.message': 'Message',
        'contact.submit': 'Send Message',
        'contact.success': 'Thank you! Your message has been sent successfully. We will get back to you soon.',
        'contact.error': 'Sorry, there was an error sending your message. Please try again or contact us directly.',
        
        // Footer
        'footer.address': 'Address',
        'footer.quick-links': 'Quick Links',
        'footer.gallery': 'Gallery',
        'footer.newsletter': 'Newsletter',
        'footer.newsletter-desc': 'Stay updated with our latest features and restaurant industry insights.',
        'footer.email-placeholder': 'Your Email',
        
        // Call to Action
        'cta.title': 'Ready to Transform Your Restaurant?',
        'cta.subtitle': 'Join hundreds of restaurants already using our Smart Menu System to increase efficiency, improve customer experience, and boost revenue.',
        'cta.book-demo': 'Book a Demo',
        'cta.contact': 'Contact Us',
        
        // Additional translations
        'demo.submitting': 'Submitting...',
        'contact.sending': 'Sending...',
        'footer.contact-info': 'Contact Information',
        'footer.follow-us': 'Follow Us',
        'footer.our-location': 'Our Location'
    },
    
    de: {
        // Navigation
        'nav.home': 'Startseite',
        'nav.services': 'Dienstleistungen',
        'nav.benefits': 'Vorteile',
        'nav.contact': 'Kontakt',
        'nav.book-demo': 'Demo buchen',
        
        // Hero Section
        'hero.title': 'Intelligentes Restaurant/Café Bestellsystem',
        'hero.subtitle': 'Verwandeln Sie Ihr Restaurant/Café mit unserer kompletten digitalen Menülösung. QR-Code-Bestellung, Tischreservierungen, flexible Zahlungen und Echtzeit-Analysen - alles in einer Plattform.',
        'hero.see-features': 'Features ansehen',
        'hero.book-demo': 'Demo buchen',
        
        // Benefits Section
        'benefits.title': 'Warum mit uns zusammenarbeiten?',
        'benefits.subtitle': 'Verwandeln Sie Ihre Restaurantbetriebe mit unserem digitalen Menüsystem. Bauen Sie Ihre Marke mit einer professionellen Website auf, verwalten Sie Einnahmen über unser umfassendes Dashboard, steigern Sie die Marketingreichweite, optimieren Sie den Betrieb mit Online-Reservierungen und verbessern Sie die Kundenzufriedenheit.',
        'benefits.income-improvement': 'Einkommensverbesserung',
        'benefits.customer-experience': 'Kundenerfahrungsverbesserung',
        'benefits.online-reservation': 'Online-Reservierungssystem',
        'benefits.income-management': 'Einkommensverwaltungs-Dashboard',
        'benefits.see-services': 'Unsere Dienstleistungen ansehen',
        
        // Services Section
        'services.section-title': 'Unsere Funktionen',
        'services.title': 'Komplettes Restaurant-Menüsystem',
        'services.subtitle': 'Entdecken Sie alle leistungsstarken Funktionen, die unser intelligentes Restaurant/Café-Menüsystem zur perfekten Lösung für Ihr Unternehmen machen.',
        'services.professional-website.title': 'Professionelle Markenwebsite',
        'services.professional-website.desc': 'Bauen Sie die digitale Präsenz Ihres Restaurants mit einer benutzerdefinierten Website auf, die Ihr Menü, hochwertige Bilder und Ihre Markengeschichte enthält. Perfekt für SEO-Optimierung, Social Media Marketing und die Etablierung professioneller Online-Glaubwürdigkeit.',
        'services.qr-ordering.title': 'QR-Code-Bestellsystem',
        'services.qr-ordering.desc': 'Revolutionieren Sie Ihren Service mit berührungsloser Bestellung. Jeder Tisch erhält einen eindeutigen QR-Code, den Kunden scannen, um auf Ihr digitales Menü zuzugreifen, Bestellungen aufzugeben und sofort zu bezahlen. Reduziert Wartezeiten und verbessert die Kundenerfahrung erheblich.',
        'services.payments.title': 'Flexible Zahlungslösungen',
        'services.payments.desc': 'Akzeptieren Sie Zahlungen sowohl online als auch persönlich mit unserem integrierten Zahlungssystem. Unterstützung für Stripe, PayPal und andere beliebte Zahlungsgateways gewährleistet sichere Transaktionen und Kundenvorteile. Behandeln Sie geteilte Rechnungen und generieren Sie automatisch Belege.',
        'services.dashboard.title': 'Einkommensverwaltungs-Dashboard',
        'services.dashboard.desc': 'Übernehmen Sie die vollständige Kontrolle über die Finanzen Ihres Restaurants mit Echtzeit-Einkommensverfolgung, Verkaufsanalysen, Gewinn- und Verlustberichten und Umsatzeinblicken. Treffen Sie fundierte Geschäftsentscheidungen mit umfassenden Finanzdaten und Exportfunktionen für die Buchhaltung.',
        'services.notifications.title': 'Sofortige Bestellbenachrichtigungen',
        'services.notifications.desc': 'Verpassen Sie nie eine Bestellung mit unserem sofortigen Benachrichtigungssystem. Mitarbeiter erhalten sofortige Warnungen über Tablet, Smartphone oder Küchendrucker und gewährleisten schnelleren Service und bessere Kundenzufriedenheit. Verfolgen Sie den Bestellstatus in Echtzeit.',
        'services.reservations.title': 'Online-Reservierungssystem',
        'services.reservations.desc': 'Optimieren Sie Ihren Buchungsprozess mit unserem integrierten Online-Reservierungssystem. Kunden können Tische direkt von Ihrer Website buchen, während Sie Verfügbarkeit und Bestätigungen von Ihrem Dashboard aus verwalten. Sammeln Sie Kundeninformationen und senden Sie automatisierte Bestätigungen.',
        
        // Service Features Lists - German
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
        'services.payments.feature3': 'Rechnungsaufteilungsfunktionalität',
        'services.payments.feature4': 'Beleggenerierung',
        
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
        
        // Additional Services
        'services.upsell.title': 'Optionale Upsell-Funktionen',
        'services.upsell.desc': 'Treuepunkte, Rabattcodes, Kundenfeedback, Online-Lieferung - verfügbar als kostenpflichtige Upgrades zur Verbesserung der Kundenerfahrung Ihres Restaurants und Steigerung des Umsatzes.',
        'services.upsell.feature1': 'Treuepunkte-System',
        'services.upsell.feature2': 'Rabattcodes & Aktionen',
        'services.upsell.feature3': 'Kundenfeedback-Sammlung',
        'services.upsell.feature4': 'Online-Lieferung Integration',
        
        'services.analytics.title': 'Finanzanalysen & Berichte',
        'services.analytics.desc': 'Umfassende Einkommensverfolgung mit detaillierten Finanzberichten, Gewinnanalysen und Umsatzeinblicken. Exportieren Sie Daten für die Buchhaltung und treffen Sie fundierte Geschäftsentscheidungen mit erweiterten Analysen.',
        'services.analytics.feature1': 'Detaillierte Finanzberichte',
        'services.analytics.feature2': 'Gewinnanalyse & Einblicke',
        'services.analytics.feature3': 'Umsatztrend-Analyse',
        'services.analytics.feature4': 'Buchhaltungsdaten-Export',
        
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
        'demo.success': 'Vielen Dank! Ihre Demo-Anfrage wurde erfolgreich übermittelt. Wir werden uns bald bei Ihnen melden, um Ihre Demo zu planen.',
        'demo.error': 'Entschuldigung, beim Übermitteln Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
        
        // Contact Form
        'contact.title': 'Kontakt für jede Anfrage',
        'contact.subtitle': 'Bereit, Ihr Restaurant/Café mit unserem intelligenten Menüsystem zu transformieren? Kontaktieren Sie uns heute, um eine Demo zu planen oder zu besprechen, wie wir Ihnen helfen können, Ihre Betriebe zu optimieren.',
        'contact.name': 'Ihr Name',
        'contact.email': 'Ihre E-Mail',
        'contact.subject': 'Betreff',
        'contact.message': 'Nachricht',
        'contact.submit': 'Nachricht senden',
        'contact.success': 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns bald bei Ihnen melden.',
        'contact.error': 'Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
        
        // Footer
        'footer.address': 'Adresse',
        'footer.quick-links': 'Schnelle Links',
        'footer.gallery': 'Galerie',
        'footer.newsletter': 'Newsletter',
        'footer.newsletter-desc': 'Bleiben Sie mit unseren neuesten Funktionen und Restaurantbrancheneinblicken auf dem Laufenden.',
        'footer.email-placeholder': 'Ihre E-Mail',
        
        // Call to Action
        'cta.title': 'Bereit, Ihr Restaurant zu transformieren?',
        'cta.subtitle': 'Schließen Sie sich Hunderten von Restaurants an, die bereits unser intelligentes Menüsystem nutzen, um die Effizienz zu steigern, die Kundenerfahrung zu verbessern und den Umsatz zu steigern.',
        'cta.book-demo': 'Demo buchen',
        'cta.contact': 'Kontakt',
        
        // Additional translations
        'demo.submitting': 'Wird übermittelt...',
        'contact.sending': 'Wird gesendet...',
        'footer.contact-info': 'Kontaktinformationen',
        'footer.follow-us': 'Folgen Sie uns',
        'footer.our-location': 'Unser Standort'
    },
    
    ar: {
        // Navigation
        'nav.home': 'الرئيسية',
        'nav.services': 'الخدمات',
        'nav.benefits': 'المزايا',
        'nav.contact': 'اتصل بنا',
        'nav.book-demo': 'احجز عرض تجريبي',
        
        // Hero Section
        'hero.title': 'نظام طلبات مطعم/مقهى ذكي',
        'hero.subtitle': 'حول مطعمك/مقهاك مع حلولنا الرقمية الشاملة للقوائم. طلبات QR، حجوزات الطاولات، مدفوعات مرنة، وتحليلات فورية - كل شيء في منصة واحدة.',
        'hero.see-features': 'شاهد المميزات',
        'hero.book-demo': 'احجز عرض تجريبي',
        
        // Benefits Section
        'benefits.title': 'لماذا تتعاون معنا؟',
        'benefits.subtitle': 'حول عمليات مطعمك مع نظام القوائم الرقمي الخاص بنا. ابني علامتك التجارية مع موقع ويب احترافي، وأدر الدخل من خلال لوحة التحكم الشاملة، وزد من وصول التسويق، وتبسيط العمليات مع الحجوزات عبر الإنترنت وتحسين رضا العملاء.',
        'benefits.income-improvement': 'تحسين الدخل',
        'benefits.customer-experience': 'تحسين تجربة العملاء',
        'benefits.online-reservation': 'نظام الحجز عبر الإنترنت',
        'benefits.income-management': 'لوحة إدارة الدخل',
        'benefits.see-services': 'شاهد خدماتنا',
        
        // Services Section
        'services.section-title': 'ميزاتنا',
        'services.title': 'نظام قوائم مطعم شامل',
        'services.subtitle': 'اكتشف جميع المميزات القوية التي تجعل نظام القوائم الذكي لمطعم/مقهى الخاص بنا الحل المثالي لعملك.',
        'services.professional-website.title': 'موقع علامة تجارية احترافي',
        'services.professional-website.desc': 'ابني الحضور الرقمي لمطعمك مع موقع ويب مخصص يحتوي على قائمتك، صور عالية الجودة، وقصة علامتك التجارية. مثالي لتحسين محركات البحث، تسويق وسائل التواصل الاجتماعي، وإرساء المصداقية المهنية عبر الإنترنت.',
        'services.qr-ordering.title': 'نظام طلبات QR',
        'services.qr-ordering.desc': 'أحدث ثورة في خدمتك مع الطلبات بدون لمس. كل طاولة تحصل على رمز QR فريد يمسحه العملاء للوصول إلى قائمتك الرقمية، ووضع الطلبات، والدفع فوراً. يقلل أوقات الانتظار ويحسن تجربة العملاء بشكل كبير.',
        'services.payments.title': 'حلول دفع مرنة',
        'services.payments.desc': 'اقبل المدفوعات عبر الإنترنت وشخصياً مع نظام الدفع المتكامل الخاص بنا. الدعم لـ Stripe، PayPal، وبوابات الدفع الشائعة الأخرى يضمن المعاملات الآمنة وراحة العملاء. تعامل مع تقسيم الفواتير وولد الإيصالات تلقائياً.',
        'services.dashboard.title': 'لوحة إدارة الدخل',
        'services.dashboard.desc': 'تول السيطرة الكاملة على أموال مطعمك مع تتبع الدخل في الوقت الفعلي، تحليلات المبيعات، تقارير الأرباح والخسائر، ورؤى الإيرادات. اتخذ قرارات عمل مدروسة مع بيانات مالية شاملة وإمكانيات التصدير للمحاسبة.',
        'services.notifications.title': 'إشعارات الطلبات الفورية',
        'services.notifications.desc': 'لا تفوت طلباً أبداً مع نظام الإشعارات الفوري الخاص بنا. يحصل الموظفون على تنبيهات فورية عبر الجهاز اللوحي، الهاتف الذكي، أو طابعة المطبخ، مما يضمن خدمة أسرع ورضا عملاء أفضل. تتبع حالة الطلب في الوقت الفعلي.',
        'services.reservations.title': 'نظام الحجز عبر الإنترنت',
        'services.reservations.desc': 'بسط عملية الحجز مع نظام الحجز عبر الإنترنت المتكامل الخاص بنا. يمكن للعملاء حجز الطاولات مباشرة من موقعك الإلكتروني بينما تدير التوفر والتأكيدات من لوحة التحكم الخاصة بك. اجمع معلومات العملاء وأرسل تأكيدات آلية.',
        
        // Service Features Lists - Arabic
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
        
        // Additional Services
        'services.upsell.title': 'ميزات البيع الإضافي الاختيارية',
        'services.upsell.desc': 'نقاط الولاء، أكواد الخصم، ملاحظات العملاء، التوصيل عبر الإنترنت - متاحة كترقيات مدفوعة لتحسين تجربة عملاء مطعمك وزيادة الإيرادات.',
        'services.upsell.feature1': 'نظام نقاط الولاء',
        'services.upsell.feature2': 'أكواد الخصم والعروض',
        'services.upsell.feature3': 'جمع ملاحظات العملاء',
        'services.upsell.feature4': 'تكامل التوصيل عبر الإنترنت',
        
        'services.analytics.title': 'التحليلات المالية والتقارير',
        'services.analytics.desc': 'تتبع شامل للإيرادات مع تقارير مالية مفصلة، تحليل الأرباح، ورؤى الإيرادات. تصدير البيانات للمحاسبة واتخاذ قرارات عمل مدروسة مع تحليلات متقدمة.',
        'services.analytics.feature1': 'تقارير مالية مفصلة',
        'services.analytics.feature2': 'تحليل الأرباح والرؤى',
        'services.analytics.feature3': 'تحليل اتجاهات الإيرادات',
        'services.analytics.feature4': 'تصدير بيانات المحاسبة',
        
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
        'demo.success': 'شكراً لك! تم إرسال طلب العرض التجريبي بنجاح. سنتواصل معك قريباً لجدولة عرضك التجريبي.',
        'demo.error': 'عذراً، حدث خطأ في إرسال طلبك. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.',
        
        // Contact Form
        'contact.title': 'اتصل بنا لأي استفسار',
        'contact.subtitle': 'مستعد لتحويل مطعمك/مقهاك مع نظام القوائم الذكي الخاص بنا؟ اتصل بنا اليوم لجدولة عرض تجريبي أو مناقشة كيف يمكننا مساعدتك في تبسيط عملياتك.',
        'contact.name': 'اسمك',
        'contact.email': 'بريدك الإلكتروني',
        'contact.subject': 'الموضوع',
        'contact.message': 'الرسالة',
        'contact.submit': 'إرسال الرسالة',
        'contact.success': 'شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.',
        'contact.error': 'عذراً، حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.',
        
        // Footer
        'footer.address': 'العنوان',
        'footer.quick-links': 'روابط سريعة',
        'footer.gallery': 'المعرض',
        'footer.newsletter': 'النشرة الإخبارية',
        'footer.newsletter-desc': 'ابق محدثاً مع أحدث مميزاتنا ورؤى صناعة المطاعم.',
        'footer.email-placeholder': 'بريدك الإلكتروني',
        
        // Call to Action
        'cta.title': 'مستعد لتحويل مطعمك؟',
        'cta.subtitle': 'انضم إلى مئات المطاعم التي تستخدم بالفعل نظام القوائم الذكي الخاص بنا لزيادة الكفاءة وتحسين تجربة العملاء وزيادة الإيرادات.',
        'cta.book-demo': 'احجز عرض تجريبي',
        'cta.contact': 'اتصل بنا',
        
        // Additional translations
        'demo.submitting': 'جاري الإرسال...',
        'contact.sending': 'جاري الإرسال...',
        'footer.contact-info': 'معلومات الاتصال',
        'footer.follow-us': 'تابعنا',
        'footer.our-location': 'موقعنا'
    }
};

// Language switching functionality
class TranslationManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
        this.init();
    }
    
    init() {
        this.loadLanguage(this.currentLanguage);
        this.createLanguageSwitcher();
    }
    
    loadLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);
        
        // Update document direction for Arabic
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', lang);
        }
        
        // Translate all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = translations[lang][key];
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'text' || element.tagName === 'INPUT' && element.type === 'email' || element.tagName === 'INPUT' && element.type === 'tel') {
                    element.placeholder = translation;
                } else if (element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update language switcher active state
        this.updateLanguageSwitcher();
    }
    
    createLanguageSwitcher() {
        // Find navbar or create language switcher
        const navbar = document.querySelector('.navbar-nav');
        if (navbar) {
            const languageSwitcher = document.createElement('div');
            languageSwitcher.className = 'language-switcher d-flex align-items-center ms-3';
            languageSwitcher.innerHTML = `
                <div class="dropdown">
                    <button class="btn btn-outline-light dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-globe me-2"></i>
                        <span id="current-lang">${this.getLanguageName(this.currentLanguage)}</span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="languageDropdown">
                        <li><a class="dropdown-item" href="#" data-lang="en">🇺🇸 English</a></li>
                        <li><a class="dropdown-item" href="#" data-lang="de">🇩🇪 Deutsch</a></li>
                        <li><a class="dropdown-item" href="#" data-lang="ar">🇸🇦 العربية</a></li>
                    </ul>
                </div>
            `;
            
            // Insert after navbar nav
            navbar.parentNode.insertBefore(languageSwitcher, navbar.nextSibling);
            
            // Add event listeners
            languageSwitcher.querySelectorAll('[data-lang]').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    const lang = e.target.getAttribute('data-lang');
                    this.loadLanguage(lang);
                });
            });
        }
    }
    
    updateLanguageSwitcher() {
        const currentLangSpan = document.getElementById('current-lang');
        if (currentLangSpan) {
            currentLangSpan.textContent = this.getLanguageName(this.currentLanguage);
        }
    }
    
    getLanguageName(lang) {
        const names = {
            'en': '🇺🇸 English',
            'de': '🇩🇪 Deutsch', 
            'ar': '🇸🇦 العربية'
        };
        return names[lang] || 'English';
    }
}

// Initialize translation manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.translationManager = new TranslationManager();
});
