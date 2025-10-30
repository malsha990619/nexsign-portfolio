<template>
  <!-- Hero Section -->
  <div class="bg-gradient-to-b from-[#2d6ba3] via-[#1565a8] to-[#0a4a7a]">
    <!-- Decorative Grid Pattern -->
    <!-- <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle,#ffffff12_2px,transparent_0px)] bg-[size:128px_128px]"></div>
    </div> -->
      
    <!-- Hero Section with Rich Content -->
    <section class="relative min-h-[50vh] flex items-center justify-center overflow-hidden px-6 py-12">
      
      <!-- Animated Background Elements -->
      <!-- <div class="absolute inset-0 overflow-hidden">
        <div class="absolute rounded-full top-20 left-10 w-96 h-96 bg-white/10 blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 700ms;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1400ms;"></div>
      </div> -->

      <div class="relative z-10 max-w-6xl mx-auto text-center 2xl:max-w-7xl">
             
        <!-- Main Heading -->
        <!-- <h1 class="mb-10 text-6xl font-bold leading-tight tracking-tight text-white md:text-[120px] drop-shadow-lg">
          Nexsign Global
        </h1> -->
        
        <!-- Tagline -->
        <h1 class="mb-8 text-3xl font-bold leading-tight text-white md:text-6xl 2xl:text-7xl drop-shadow-lg">
          Nexsign Web Development Portfolio
        </h1>
        
        <p class="max-w-4xl ytext mx-auto text-[16px] leading-relaxed text-white/90 md:text-[20px] 2xl:text-xl drop-shadow">
          Nexsign Global (Pvt) Ltd is a trusted web development partner with years of experience creating responsive, visually captivating, and conversion-focused websites for clients across diverse industries. We specialize in crafting tailored digital platforms that deliver measurable results for both global and local clients, helping businesses enhance their online presence and achieve their goals through innovative web solutions.
        </p>

      </div>

    </section>

  </div>

  <!-- Portfolio Section -->
  <section id="portfolio" class="relative px-6 py-12 bg-gray-50 md:px-12">
    <div class="mx-auto max-w-screen-2xl">
      
      <!-- Projects Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="project in projects" 
          :key="project.id"
          class="overflow-hidden transition-all duration-500 bg-white border border-gray-100 rounded-sm shadow-lg group hover:shadow-2xl hover:-translate-y-2"
        >
          <!-- Project Image -->
          <div class="relative p-2 overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          <!-- Project Info -->
          <div class="p-6">
            <h3 class="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-nexsign-600">
              {{ project.title }}
            </h3>
            <p class="mb-4 text-gray-600 line-clamp-2">
              {{ project.description }}
            </p>
            
            <!-- Technology Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="(tech, index) in project.technologies" 
                :key="index"
                class="px-3 py-1 text-sm font-medium text-blue-700 rounded-full bg-blue-50"
              >
                {{ tech }}
              </span>
            </div>

            <!-- View Project Link -->
            <a 
              :href="project.link"
              target="_blank"
              class="inline-flex items-center gap-2 font-semibold transition-all text-nexsign-600 hover:gap-3 group"
            >
              View Project
              <ExternalLink class="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Footer -->
  <footer class="hidden py-6 text-gray-300 bg-[#051D37] md:block">
    <div class="container flex flex-wrap w-full px-12 mx-auto md:justify-between">
      <!-- Company Info -->
        <div class="text-center md:text-left">
          <!-- Logo Image -->
          <img 
            :src="foooterlogo" 
            alt="Nexsign Global Logo" 
            class="w-auto h-12 mt-1 md:mx-0"
          />
        </div>

        <div>
          <p class="flex items-center gap-1 text-gray-400"><Mail :size="16" />info@nexsignglobal.com</p>
          <a
            href="https://nexsignglobal.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-[#3b9dff] hover:text-[#1e7fca] transition-colors mt-"
          >
            www.nexsignglobal.com
            <ExternalLink :size="16" />
          </a>
        </div>

        <!-- Social Media Icons -->
        <div class="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/company/nexsignglobal/"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin :size="24" />
          </a>
          <a
            href="https://www.facebook.com/nexsignglobal"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Facebook :size="24" />
          </a>
          <a
            href="https://www.instagram.com/nexsignglobal/"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300 transform hover:scale-110"
            aria-label="Twitter"
          >
            <Instagram :size="24" />
          </a>
          <a
            href="https://www.tiktok.com/@nexsignglobal"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300 transform hover:scale-110"
              aria-label="TikTok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
              </svg>
          </a>
        </div>
    </div>
  </footer>

  <!-- Mobile Footer (visible only on mobile) -->
  <footer class="block py-8 text-gray-300 bg-[#051D37] md:hidden">
    <div class="px-6">
      <!-- Logo -->
      <div class="flex justify-center mb-6">
        <img 
          :src="foooterlogo" 
          alt="Nexsign Global Logo" 
          class="h-auto w-36"
        />
      </div>

      <!-- Contact Info -->
      <div class="mb-6 space-y-3 text-center">
        <a
          href="mailto:infog@nexsignglobal.com"
          class="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-[#3b9dff] transition-colors"
        >
          <Mail :size="16" />
          infog@nexsignglobal.com
        </a>
        <a
          href="https://nexsignglobal.com"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 text-sm text-[#3b9dff] hover:text-[#1e7fca] transition-colors"
        >
          www.nexsignglobal.com
          <ExternalLink :size="14" />
        </a>
      </div>

      <!-- Social Media Icons -->
      <div class="flex items-center justify-center gap-4">
        <a
          href="https://www.linkedin.com/company/nexsignglobal/"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin :size="18" />
        </a>
        <a
          href="https://www.facebook.com/nexsignglobal"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300"
          aria-label="Facebook"
        >
          <Facebook :size="18" />
        </a>
        <a
          href="https://www.instagram.com/nexsignglobal/"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300"
          aria-label="Instagram"
        >
          <Instagram :size="18" />
        </a>
        <a
          href="https://www.tiktok.com/@nexsignglobal"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300"
          aria-label="TikTok"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>

  <!-- whatsapp icon -->
  <a href="https://wa.me/94701728259" target="_blank" rel="noopener noreferrer"
    class="fixed right-3 bottom-7 lg:right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 z-50"
    aria-label="Chat on WhatsApp"
  >
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </a>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { 
  ExternalLink,
  ArrowRight,
  ChevronDown,MessageCircle, Linkedin,
  Facebook,  
  Instagram,Mail     
} from 'lucide-vue-next'
import { Icon } from '@iconify/vue'
import logo from './assets/nexsign-logo.png' 
import foooterlogo from './assets/nexsign-logo-footer.png'
// Scroll detection
const isScrolled = ref(false)

// Portfolio Projects Data
const projects = [
  {
    id: 1,
    title: "Fastway",
    description: "Fastway is an online store offering electronics, tools, and lifestyle products across Sri Lanka.",
    image: `${import.meta.env.BASE_URL}project_images/1.PNG`,
    technologies: ["Vue js", "Laravel", "MySQL", "Tailwind"],
    link: "https://fastway.lk/"
  },
  {
    id: 2,
    title: "Royal Group",
    description: "Royal Group manages hotels, rest houses, banquet halls & catering services across Colombo & Kandy.",
    image: `${import.meta.env.BASE_URL}project_images/2.PNG`,
    technologies: ["Wordpress"],
    link: "https://royalgroup.lk/"
  },
  {
    id: 3,
    title: "Dedicated Community Care",
    description: "Dedicated Community Care is an NDIS service provider offering personalized support services in Melbourne.",
    image: `${import.meta.env.BASE_URL}project_images/3.PNG`,
    technologies: ["Wordpress"],
    link: "https://dedicatedcommunitycare.com.au/"
  },
  {
    id: 4,
    title: "Flying Fish",
    description: "Flying Fish offers boat tours for thrilling ocean safaris and unique experiences in the Maldivian seas.",
    image: `${import.meta.env.BASE_URL}project_images/4.PNG`,
    technologies: ["Vue js", "Laravel", "MySQL", "Tailwind"],
    link: "https://flyingfish.mv/"
  },
  {
    id: 5,
    title: "Acland Property Services",
    description: "Acland Property Services delivers high-quality craftsmanship and property maintenance across Melbourne.",
    image: `${import.meta.env.BASE_URL}project_images/5.PNG`,
    technologies: ["Vue js", "Laravel", "MySQL", "Tailwind"],
    link: "https://www.aclandps.com.au/"
  },
  {
    id: 6,
    title: "The Vault Of Gems",
    description: "D and D Trading L.L.C – FZ offers jewelry sales, custom designs, and gem auctions online.",
    image: `${import.meta.env.BASE_URL}project_images/6.PNG`,
    technologies: ["Vue js", "inertia js", "Laravel", "MySQL","Tailwind"],
    link: "https://gem.nexsignglobal.com/"
  },
  {
    id: 7,
    title: "Dreamer Traveller",
    description: "Dreamer Traveller crafts tailor-made tours across Sri Lanka to bring your travel dreams to life.",
    image: `${import.meta.env.BASE_URL}project_images/7.PNG`,
    technologies: ["Wordpress"],
    link: "https://dreamertraveller.com/"
  },
  {
    id: 8,
    title: "TCH Care",
    description: "TCH Care is a Melbourne-based NDIS service provider offering tailored disability supports and accommodations.",
    image: `${import.meta.env.BASE_URL}project_images/8.PNG`,
    technologies: ["Wordpress"],
    link: "https://www.tchcare.com.au/"
  },
  {
    id: 9,
    title: "Markosvic Driving School",
    description: "Markosvic Driving School offers expert driving lessons across Melbourne for confident drivers.",
    image: `${import.meta.env.BASE_URL}project_images/9.PNG`,
    technologies: ["Wordpress"],
    link: "https://markosvicdrivingschool.com.au/"
  },
  {
    id: 10,
    title: "Stones & Metals",
    description: "Stones & Metals offers fine jewelry collections with rings, earrings, and custom designs.",
    image: `${import.meta.env.BASE_URL}project_images/10.PNG`,
    technologies: ["Wordpress"],
    link: "https://stone.brandsbyhiru.com/"
  },
  {
    id: 11,
    title: "TechView Computers",
    description: "TechView Computers offers top-quality PCs, components and tech solutions in Sri Lanka.",
    image: `${import.meta.env.BASE_URL}project_images/11.PNG`,
    technologies: ["Wordpress"],
    link: "https://techviewcomputers.lk/"
  },
  {
    id: 12,
    title: "Time Travellers",
    description: "Time Travellers creates meaningful journeys beyond tourism, celebrating Sri Lanka’s culture and traditions.",
    image: `${import.meta.env.BASE_URL}project_images/12.PNG`,
    technologies: ["Vue js", "Laravel", "MySQL","Tailwind"],
    link: "https://timetravellers.biz/"
  },
  {
    id: 13,
    title: "ISORUS",
    description: "ISORUS offers expert ISO consulting services across Australia, guiding businesses to certification success.",
    image: `${import.meta.env.BASE_URL}project_images/13.PNG`,
    technologies: ["Wordpress"],
    link: "https://isorus.com.au/"
  },
  {
    id: 14,
    title: "Live Lanka Tours",
    description: "Live Lanka Tours offers personalized journeys highlighting Sri Lanka’s natural beauty and culture.",
    image: `${import.meta.env.BASE_URL}project_images/14.PNG`,
    technologies: ["Wordpress"],
    link: "https://livelankatours.com/"
  },
  {
    id: 15,
    title: "Infonet Lanka",
    description: "Infonet Lanka is your trusted IT partner, delivering high-quality products, expert repair services, and IT training programs.",
    image: `${import.meta.env.BASE_URL}project_images/15.PNG`,
    technologies: ["Wordpress"],
    link: "https://infonetlanka.com/"
  },
  {
    id: 16,
    title: "Wood Haven",
    description: "Wood Haven supplies quality timber, plywood, and foam boards with cutting and delivery services.",
    image: `${import.meta.env.BASE_URL}project_images/16.PNG`,
    technologies: ["Vue js", "Laravel", "MySQL","Tailwind"],
    link: "https://woodhaven.mv/"
  },
  {
    id: 17,
    title: "Lipton View",
    description: "Lipton View offers personalized luxury accommodations and exceptional services for unforgettable stays.",
    image: `${import.meta.env.BASE_URL}project_images/17.PNG`,
    technologies: ["Vue js", "inertia js", "Laravel", "MySQL","Tailwind"],
    link: "https://lipton.nexsignglobal.com/"
  },
  {
    id: 18,
    title: "Premium Shipping",
    description: "Premium Shipping delivers fast and affordable shipping solutions across Sri Lanka.",
    image: `${import.meta.env.BASE_URL}project_images/18.PNG`,
    technologies: ["Wordpress"],
    link: "https://premiumshipping.lk/"
  },
]

// Technologies data with Iconify icon names
const technologies = [
  { name: "Vue.js", icon: "mdi:vuejs", color: "from-green-400 to-green-600" },
  { name: "React", icon: "mdi:react", color: "from-blue-400 to-blue-600" },
  { name: "Tailwind CSS", icon: "mdi:tailwind", color: "from-cyan-400 to-cyan-600" },
  { name: "JavaScript", icon: "mdi:language-javascript", color: "from-yellow-400 to-yellow-600" },
  { name: "Laravel", icon: "mdi:laravel", color: "from-red-400 to-red-600" },
  { name: "Node.js", icon: "mdi:nodejs", color: "from-green-500 to-green-700" },
  { name: "WordPress", icon: "mdi:wordpress", color: "from-blue-500 to-blue-700" },
  { name: "MySQL", icon: "mdi:database", color: "from-orange-400 to-orange-600" },
  { name: "MongoDB", icon: "simple-icons:mongodb", color: "from-green-600 to-green-800" },
  { name: "Firebase", icon: "mdi:firebase", color: "from-yellow-500 to-orange-500" },
  { name: "AWS", icon: "mdi:aws", color: "from-orange-500 to-orange-700" },
  { name: "DigitalOcean", icon: "mdi:digital-ocean", color: "from-blue-500 to-blue-700" }
]

const currentYear = computed(() => new Date().getFullYear())

const handleScroll = () => {
  isScrolled.value = window.scrollY > 200
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

</style>