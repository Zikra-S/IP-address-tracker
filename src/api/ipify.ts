import type { IpData } from '../types/ip'

const BASE_URL = 'https://geo.ipify.org/api/v2/country,city'

const isIpAddress = (value: string) =>
  /^(\d{1,3}\.){3}\d{1,3}$/.test(value) || value.includes(':')

export async function fetchIpData(term: string): Promise<IpData> {
  const params = new URLSearchParams({
    apiKey: import.meta.env.VITE_IPIFY_KEY,
  })

  if (term) {
    params.set(isIpAddress(term) ? 'ipAddress' : 'domain', term)
  }

  const response = await fetch(`${BASE_URL}?${params}`)

  if (!response.ok) {
    throw new Error('Could not find that IP address or domain')
  }

  return response.json()
}