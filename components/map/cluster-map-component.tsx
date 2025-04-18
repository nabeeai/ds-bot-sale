"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface ClusterMapComponentProps {
  mapType: "before" | "after" | "comparison"
}

const ClusterMapComponent = ({ mapType }: ClusterMapComponentProps) => {
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

    // สร้างกลุ่มจำลอง
    const createClusters = (count: number) => {
      const clusters = []
      const clusterCenters = [
        [13.7563, 100.5018], // กรุงเทพฯ กลาง
        [13.82, 100.52], // กรุงเทพฯ เหนือ
        [13.7, 100.48], // กรุงเทพฯ ใต้
        [13.78, 100.45], // กรุงเทพฯ ตะวันตก
        [13.73, 100.55], // กรุงเทพฯ ตะวันออก
        [13.85, 100.48], // กรุงเทพฯ เหนือตะวันตก
        [13.83, 100.55], // กรุงเทพฯ เหนือตะวันออก
        [13.68, 100.45], // กรุงเทพฯ ใต้ตะวันตก
        [13.69, 100.55], // กรุงเทพฯ ใต้ตะวันออก
        [13.79, 100.38], // นนทบุรี
        [13.65, 100.6], // สมุทรปราการ
        [13.9, 100.6], // ปทุมธานี
      ]

      for (let i = 0; i < count && i < clusterCenters.length; i++) {
        const center = clusterCenters[i] as [number, number]
        const points = createRandomPoints(center, 30, 5)
        clusters.push({
          center,
          points,
          color: getRandomColor(),
        })
      }
      return clusters
    }

    // สร้างสีสุ่ม
    const getRandomColor = () => {
      const colors = [
        "#FF5733",
        "#33FF57",
        "#3357FF",
        "#FF33F5",
        "#F5FF33",
        "#33FFF5",
        "#FF5733",
        "#33FF57",
        "#3357FF",
        "#FF33F5",
        "#F5FF33",
        "#33FFF5",
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    // สร้างข้อมูลจำลอง
    const deliveryPoints = createRandomPoints([13.7563, 100.5018], 500, 15)
    const clusters = createClusters(12)

    // แสดงข้อมูลตาม mapType
    if (mapType === "before") {
      // แสดงจุดจัดส่งก่อนการจัดกลุ่ม
      deliveryPoints.forEach((point) => {
        L.circleMarker(point as [number, number], {
          radius: 4,
          color: "#333",
          fillColor: "#666",
          fillOpacity: 0.8,
        }).addTo(map)
      })
    } else if (mapType === "after") {
      // แสดงจุดจัดส่งหลังการจัดกลุ่ม
      clusters.forEach((cluster) => {
        // วาดวงกลมแสดงขอบเขตของกลุ่ม
        L.circle(cluster.center, {
          color: cluster.color,
          fillColor: cluster.color,
          fillOpacity: 0.1,
          radius: 5000,
        }).addTo(map)

        // แสดงจุดจัดส่งในกลุ่ม
        cluster.points.forEach((point) => {
          L.circleMarker(point as [number, number], {
            radius: 4,
            color: cluster.color,
            fillColor: cluster.color,
            fillOpacity: 0.8,
          }).addTo(map)
        })
      })
    } else if (mapType === "comparison") {
      // แสดงการเปรียบเทียบ
      // แบ่งหน้าจอเป็น 2 ส่วน
      const leftDiv = L.DomUtil.create("div", "comparison-left")
      leftDiv.style.position = "absolute"
      leftDiv.style.top = "0"
      leftDiv.style.left = "0"
      leftDiv.style.width = "50%"
      leftDiv.style.height = "100%"
      leftDiv.style.borderRight = "2px solid #333"
      leftDiv.style.zIndex = "1000"
      leftDiv.style.pointerEvents = "none"
      leftDiv.innerHTML =
        '<div style="background: rgba(255,255,255,0.7); padding: 5px; margin: 10px; display: inline-block; pointer-events: none;">ก่อนการจัดกลุ่ม</div>'
      map.getContainer().appendChild(leftDiv)

      const rightDiv = L.DomUtil.create("div", "comparison-right")
      rightDiv.style.position = "absolute"
      rightDiv.style.top = "0"
      rightDiv.style.right = "0"
      rightDiv.style.width = "50%"
      rightDiv.style.height = "100%"
      rightDiv.style.zIndex = "1000"
      rightDiv.style.pointerEvents = "none"
      rightDiv.innerHTML =
        '<div style="background: rgba(255,255,255,0.7); padding: 5px; margin: 10px; float: right; pointer-events: none;">หลังการจัดกลุ่ม</div>'
      map.getContainer().appendChild(rightDiv)

      // แสดงจุดจัดส่งก่อนการจัดกลุ่ม (ซ้าย)
      deliveryPoints.slice(0, deliveryPoints.length / 2).forEach((point) => {
        L.circleMarker(point as [number, number], {
          radius: 4,
          color: "#333",
          fillColor: "#666",
          fillOpacity: 0.8,
        }).addTo(map)
      })

      // แสดงจุดจัดส่งหลังการจัดกลุ่ม (ขวา)
      clusters.slice(0, 6).forEach((cluster) => {
        // วาดวงกลมแสดงขอบเขตของกลุ่ม (เฉพาะครึ่งขวาของแผนที่)
        const bounds = map.getBounds()
        const center = bounds.getCenter()
        const clusterCenter = L.latLng(cluster.center[0], cluster.center[1])

        // ปรับตำแหน่งให้อยู่ทางขวาของแผนที่
        const adjustedLng = center.lng + (clusterCenter.lng - center.lng) * 0.5 + (bounds.getEast() - center.lng) * 0.5
        const adjustedCenter: [number, number] = [clusterCenter.lat, adjustedLng]

        L.circle(adjustedCenter, {
          color: cluster.color,
          fillColor: cluster.color,
          fillOpacity: 0.1,
          radius: 3000,
        }).addTo(map)

        // แสดงจุดจัดส่งในกลุ่ม (เฉพาะครึ่งขวาของแผนที่)
        cluster.points.slice(0, 15).forEach((point, idx) => {
          const adjustedPoint: [number, number] = [
            point[0],
            center.lng + (point[1] - center.lng) * 0.5 + (bounds.getEast() - center.lng) * 0.5,
          ]
          L.circleMarker(adjustedPoint, {
            radius: 4,
            color: cluster.color,
            fillColor: cluster.color,
            fillOpacity: 0.8,
          }).addTo(map)
        })
      })
    }

    // ปรับขนาดแผนที่ให้พอดีกับข้อมูล
    const bounds = L.latLngBounds(deliveryPoints as [number, number][])
    map.fitBounds(bounds, { padding: [50, 50] })

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
      }
    }
  }, [mapType])

  return <div ref={mapContainerRef} className="w-full h-full rounded-lg" />
}

export default ClusterMapComponent
