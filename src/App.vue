<template>
  <!-- Hero Section -->
  <div class="bg-gradient-to-br from-[#1e7fca] via-[#0a4d8c] to-[#1e7fca] w-full">
    <!-- Decorative Grid Pattern -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle,#ffffff12_2px,transparent_0px)] bg-[size:128px_128px]"></div>
    </div>
      
    <!-- Hero Section with Rich Content -->
    <section class="relative min-h-[50vh] flex items-center justify-center overflow-hidden px-6 py-12">
      
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute rounded-full top-20 left-10 w-96 h-96 bg-white/10 blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 700ms;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1400ms;"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
             
        <!-- Main Heading -->
        <h1 class="mb-8 text-6xl font-bold leading-tight tracking-tight text-white md:text-8xl drop-shadow-lg">
          Nexsign Global
        </h1>
        
        <!-- Tagline -->
        <h2 class="mb-10 text-4xl font-bold leading-tight text-white md:text-5xl drop-shadow-lg">
          Web Development Portfolio
        </h2>

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
          class="overflow-hidden transition-all duration-500 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
        >
          <!-- Project Image -->
          <div class="relative overflow-hidden aspect-video">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
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
  <footer class="hidden py-12 text-gray-300 bg-gray-900 md:block">
    <div class="flex flex-wrap w-full px-12 md:justify-between">
      <!-- Company Info -->
        <div class="text-center md:text-left">
          <!-- Logo Image -->
          <img 
            :src="foooterlogo" 
            alt="Nexsign Global Logo" 
            class="w-auto mb-3 h-11 md:mx-0"
          />
          <p class="flex items-center gap-1 text-gray-400"><Mail :size="16" />infog@nexsignglobal.com</p>
          <a
            href="https://nexsignglobal.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-[#3b9dff] hover:text-[#1e7fca] transition-colors mt-2"
          >
            www.nexsignglobal.com
            <ExternalLink :size="16" />
          </a>
        </div>

        <!-- Social Media Icons -->
        <div class="flex items-center gap-6">
          <a
            href="https://linkedin.com/company/nexsignglobal"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin :size="24" />
          </a>
          <a
            href="https://github.com/nexsignglobal"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Facebook :size="24" />
          </a>
          <a
            href="https://twitter.com/nexsignglobal"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300 transform hover:scale-110"
            aria-label="Twitter"
          >
            <Instagram :size="24" />
          </a>
          <a
            href="https://tiktok.com/@nexsignglobal"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300 transform hover:scale-110"
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
<footer class="block py-8 text-gray-300 bg-gray-900 md:hidden">
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
        href="https://linkedin.com/company/nexsignglobal"
        target="_blank"
        rel="noopener noreferrer"
        class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin :size="18" />
      </a>
      <a
        href="https://facebook.com/nexsignglobal"
        target="_blank"
        rel="noopener noreferrer"
        class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300"
        aria-label="Facebook"
      >
        <Facebook :size="18" />
      </a>
      <a
        href="https://instagram.com/nexsignglobal"
        target="_blank"
        rel="noopener noreferrer"
        class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300"
        aria-label="Instagram"
      >
        <Instagram :size="18" />
      </a>
      <a
        href="https://tiktok.com/@nexsignglobal"
        target="_blank"
        rel="noopener noreferrer"
        class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1e7fca] transition-all duration-300"
        aria-label="TikTok"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
        </svg>
      </a>
    </div>
  </div>
</footer>

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
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with payment integration, inventory management, and customer reviews.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MySQL", "Stripe"],
    link: "https://example.com/project1"
  },
  {
    id: 2,
    title: "Corporate Website",
    description: "Professional corporate website with modern design, CMS integration, and multi-language support.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Laravel", "Tailwind CSS"],
    link: "https://example.com/project2"
  },
  {
    id: 3,
    title: "Real Estate Portal",
    description: "Property listing platform with advanced search filters, virtual tours, and agent management system.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    technologies: ["React", "PHP", "PostgreSQL"],
    link: "https://example.com/project3"
  },
  {
    id: 4,
    title: "Healthcare Management",
    description: "Comprehensive healthcare system for patient scheduling, medical records, and telemedicine consultations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "https://example.com/project4"
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "Interactive online education platform with video streaming, assessments, and progress tracking.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
    link: "https://example.com/project5"
  },
  {
    id: 6,
    title: "Restaurant Ordering System",
    description: "Multi-restaurant food ordering app with real-time tracking, menu display, and integrated payment processing.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    link: "https://example.com/project6"
  }
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