/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next usa ESLint internamente por defecto; como eliminamos el setup local,
  // desactivamos el lint durante `next build`.
  eslint: { ignoreDuringBuilds: true },
}

export default nextConfig
