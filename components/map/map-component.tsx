"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet.heat"

interface MapComponentProps {
  mapType: "current-routes" | "heatmap" | "optimized-routes"
}

const MapComponent = ({ mapType }: MapComponentProps) => {
  const mapRef = useRef<L.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapContainerRef.current) return

    // ถ้ามีแผนที่อยู่แล้ว ให้ลบออกก่อน
    if (mapRef.current) {
      mapRef.current.remove()
    }

    // สร้างแผนที่ใหม่
    const map = L.map(mapContainerRef.current).setView([13.7563, 100.5018], 11) // กรุงเทพฯ
    mapRef.current = map

    // เพิ่ม tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    // สร้างข้อมูลจำลอง
    const createRandomPoints = (center: [number, number], count: number, radius: number) => {
      const points = []
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * radius
        const lat = center[0] + distance * Math.cos(angle) * 0.01
        const lng = center[1] + distance * Math.sin(angle) * 0.01
        points.push([lat, lng])
      }
      return points
    }

    // สร้างเส้นทางจำลอง
    const createRandomRoutes = (points: [number, number][], count: number) => {
      const routes = []
      for (let i = 0; i < count; i++) {
        const routePoints = []
        const currentPoint = [13.7563, 100.5018] as [number, number] // จุดเริ่มต้น (ศูนย์กระจายสินค้า)
        routePoints.push(currentPoint)

        // สุ่มจุดจัดส่ง 5-10 จุด
        const deliveryCount = Math.floor(Math.random() * 6) + 5
        for (let j = 0; j < deliveryCount; j++) {
          const randomIndex = Math.floor(Math.random() * points.length)
          const nextPoint = points[randomIndex] as [number, number]
          routePoints.push(nextPoint)
        }

        // กลับไปที่จุดเริ่มต้น
        routePoints.push([13.7563, 100.5018])
        routes.push(routePoints)
      }
      return routes
    }

    // สร้างข้อมูลจำลอง
    const deliveryPoints = createRandomPoints([13.7563, 100.5018], 500, 15)
    const currentRoutes = createRandomRoutes(deliveryPoints as [number, number][], 50)
    const optimizedRoutes = createRandomRoutes(deliveryPoints as [number, number][], 40)

    // แสดงข้อมูลตาม mapType
    if (mapType === "current-routes") {
      // แสดงเส้นทางปัจจุบัน
      currentRoutes.forEach((route) => {
        L.polyline(route, { color: "red", weight: 3 }).addTo(map)
      })

      // แสดงจุดจัดส่ง
      deliveryPoints.forEach((point) => {
        L.circleMarker(point as [number, number], {
          radius: 4,
          color: "#333",
          fillColor: "#666",
          fillOpacity: 0.8,
        }).addTo(map)
      })
    } else if (mapType === "heatmap") {
      // แสดง heatmap
      const heatData = deliveryPoints.map((point) => [point[0], point[1], 0.5])
      L.heatLayer(heatData, { radius: 25 }).addTo(map)
    } else if (mapType === "optimized-routes") {
      // แสดงเส้นทางที่ปรับปรุงแล้ว
      optimizedRoutes.forEach((route) => {
        L.polyline(route, { color: "blue", weight: 3 }).addTo(map)
      })

      // แสดงจุดจัดส่ง
      deliveryPoints.forEach((point) => {
        L.circleMarker(point as [number, number], {
          radius: 4,
          color: "#333",
          fillColor: "#666",
          fillOpacity: 0.8,
        }).addTo(map)
      })
    }

    // ปรับขนาดแผนที่ให้พอดีกับข้อมูล
    if (mapType === "current-routes" || mapType === "optimized-routes") {
      const bounds = L.latLngBounds(deliveryPoints as [number, number][])
      map.fitBounds(bounds, { padding: [50, 50] })
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
      }
    }
  }, [mapType])

  return <div ref={mapContainerRef} className="w-full h-full rounded-lg" />
}

export default MapComponent
