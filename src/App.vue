<template>
  <!-- Hero Section -->
  <div class="min-h-screen bg-gradient-to-br from-[#1e7fca] via-[#0a4d8c] to-[#1e7fca] w-full">
    <!-- Decorative Grid Pattern -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle,#ffffff12_2px,transparent_0px)] bg-[size:128px_128px]"></div>
    </div>
      
    <!-- Simple Header -->
    <header  
      :class="['fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 transition-all duration-300',
          isScrolled 
          ? 'bg-[#031c38]/65 backdrop-blur-md shadow-lg border-b border-transparent' 
          : 'bg-transparent border-b border-white/0'
      ]"
    >
      <div class="mt-1 md:mt-0">
        <!-- Logo Image -->
        <div class="flex items-center justify-center">
          <img :src="foooterlogo" alt="Nexsign Global Logo" class="w-auto h-8 transition-all duration-300 md:h-8 lg:h-10"/>
        </div>
      </div>
      
      <a 
        href="https://nexsignglobal.com" 
        target="_blank"
        :class="[
          'text-[13px] md:text-[15px] px-4 py-1.5 md:px-6 md:py-2.5 mr-2 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl group font-semibold',
          isScrolled 
            ? 'bg-white text-nexsign-600 hover:bg-gray-50 border border-gray-200' 
            : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
        ]"
      >
        Visit Main Website
        <ExternalLink class="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </header>

    <!-- Hero Section with Rich Content -->
    <section class="relative min-h-[95vh] flex items-center justify-center overflow-hidden px-6 py-12">
      
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

        <!-- Rich Description -->
        <div class="max-w-4xl mx-auto mb-12 space-y-6">
          <p class="text-xl font-medium leading-relaxed text-white md:text-2xl drop-shadow-md">
            We transform innovative ideas into powerful, scalable web solutions that drive real business growth and deliver exceptional user experiences.
          </p>
          
          
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button 
            onclick="document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })"
            class="flex items-center gap-3 px-10 py-4 text-lg font-bold transition-all duration-300 bg-white shadow-2xl group text-nexsign-600 rounded-xl hover:bg-gray-50 hover:shadow-3xl hover:scale-105"
          >
            View Our Work
            <ArrowRight class="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>

    </section>

      <!-- Scroll Indicator -->
      <div class="absolute inset-x-0 z-20 justify-center hidden md:flex bottom-6 animate-bounce">
        <div class="flex flex-col items-center gap-2">
          <span class="px-3 py-1 text-sm font-medium rounded-full text-blue-100/90 backdrop-blur-sm bg-white/10">
            Scroll to explore
          </span>
          <ChevronDown class="w-6 h-6 text-white/90 drop-shadow-lg" />
        </div>
      </div>

  </div>

  <!-- Portfolio Section -->
  <section id="portfolio" class="relative px-6 py-12 md:py-20 bg-gray-50 md:px-12">
    <div class="mx-auto max-w-screen-2xl">
      
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Our Portfolio
        </h2>
        <p class="max-w-3xl mx-auto text-lg text-gray-600">
          Explore our recent projects showcasing innovation, quality, and exceptional results
        </p>
      </div>

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

  <!-- Tech Stack Section -->
  <section class="py-12 bg-white md:py-20">
    <div class="container px-6 mx-auto">
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Technologies We Master
        </h2>
        <p class="max-w-2xl mx-auto text-lg text-gray-600">
          Leveraging cutting-edge technologies to build robust, scalable solutions
        </p>
      </div>

      <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <div v-for="(tech, index) in technologies" :key="tech.name"
          class="relative p-6 text-center transition-all duration-300 cursor-pointer group bg-gray-50 rounded-xl hover:shadow-xl hover:-translate-y-2"
        >
          <div
            :class="[
              'inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br text-white mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-3',
              tech.color
            ]"
          >
            <Icon :icon="tech.icon" class="w-8 h-8" />
          </div>
          <h3 class="font-semibold text-gray-900 group-hover:text-[#1e7fca] transition-colors">
            {{ tech.name }}
          </h3>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section id="contact" class="py-14 md:py-20 bg-gradient-to-br from-[#1e7fca] to-[#0a4d8c] text-white relative overflow-hidden">
    <!-- Background Blurred Circles -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute w-64 h-64 bg-white rounded-full top-10 right-10 blur-3xl"></div>
      <div class="absolute bg-white rounded-full bottom-10 left-10 w-80 h-80 blur-3xl"></div>
    </div>

    <div class="container relative z-10 px-6 mx-auto text-center">
      <h2 class="mb-6 text-4xl font-bold md:text-5xl">
        Ready to Start Your Project?
      </h2>
      <p class="max-w-3xl mx-auto mb-12 text-xl text-blue-100 md:text-2xl">
        Let's collaborate to bring your vision to life with innovative web solutions
        that drive results and exceed expectations.
      </p>

      <div class="flex flex-col items-center justify-center gap-6 mb-8 sm:flex-row">
        
        <a 
          href="https://nexsignglobal.com"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-white text-[#1e7fca] px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
        >
          Visit Our Website
          <ArrowRight :size="20" class="transition-transform group-hover:translate-x-1" />
        </a>

        <a
          href="https://wa.me/94712143441?text=Hi%2C%20I%27m%20interested%20in%20your%20web%20development%20services"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#1e7fca] transition-all duration-300 transform hover:scale-105 group"
        >
          <MessageCircle :size="20" />
          Chat on WhatsApp
        </a>
      </div>

      <p class="text-lg text-blue-100">
        <span class="font-semibold">Email:</span> infog@nexsignglobal.com
      </p>
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