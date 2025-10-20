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
  <footer class="py-12 text-gray-300 bg-gray-900">
    <div class="container px-6 mx-auto">
      <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
        
        <!-- Company Info -->
        <div class="text-center md:text-left">
          <!-- Logo Image -->
          <img 
            :src="foooterlogo" 
            alt="Nexsign Global Logo" 
            class="w-auto mb-3 h-11 md:mx-0"
          />
          <p class="text-gray-400">Crafting Digital Excellence</p>
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
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 mt-8 text-sm text-center text-gray-400 border-t border-gray-800">
        <p>&copy; {{ currentYear }} Nexsign Global. All rights reserved.</p>
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
  Instagram   
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