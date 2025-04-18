"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MoreHorizontal, Download, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react"

// Sample customer data
const customers = [
  {
    id: "CUS-001",
    name: "สมชาย ใจดี",
    email: "somchai@example.com",
    phone: "081-234-5678",
    region: "กรุงเทพฯ",
    segment: "ลูกค้าประจำ",
    totalSpent: 125000,
    lastPurchase: "2023-06-15",
    status: "active",
  },
  {
    id: "CUS-002",
    name: "สมหญิง รักสวย",
    email: "somying@example.com",
    phone: "089-876-5432",
    region: "เชียงใหม่",
    segment: "ลูกค้าใหม่",
    totalSpent: 45000,
    lastPurchase: "2023-07-22",
    status: "active",
  },
  {
    id: "CUS-003",
    name: "วิชัย มั่งมี",
    email: "wichai@example.com",
    phone: "062-345-6789",
    region: "ภูเก็ต",
    segment: "ลูกค้า VIP",
    totalSpent: 350000,
    lastPurchase: "2023-06-30",
    status: "active",
  },
  {
    id: "CUS-004",
    name: "นารี สดใส",
    email: "naree@example.com",
    phone: "095-678-1234",
    region: "ขอนแก่น",
    segment: "ลูกค้าประจำ",
    totalSpent: 85000,
    lastPurchase: "2023-05-18",
    status: "inactive",
  },
  {
    id: "CUS-005",
    name: "ประเสริฐ ยิ้มแย้ม",
    email: "prasert@example.com",
    phone: "084-567-8901",
    region: "กรุงเทพฯ",
    segment: "ลูกค้า VIP",
    totalSpent: 275000,
    lastPurchase: "2023-07-05",
    status: "active",
  },
  {
    id: "CUS-006",
    name: "มาลี ดอกไม้",
    email: "malee@example.com",
    phone: "087-654-3210",
    region: "เชียงใหม่",
    segment: "ลูกค้าประจำ",
    totalSpent: 95000,
    lastPurchase: "2023-04-12",
    status: "inactive",
  },
  {
    id: "CUS-007",
    name: "สมศักดิ์ เก่งกาจ",
    email: "somsak@example.com",
    phone: "091-234-5678",
    region: "กรุงเทพฯ",
    segment: "ลูกค้าใหม่",
    totalSpent: 35000,
    lastPurchase: "2023-07-18",
    status: "active",
  },
  {
    id: "CUS-008",
    name: "วิภา สวยงาม",
    email: "wipa@example.com",
    phone: "083-456-7890",
    region: "ภูเก็ต",
    segment: "ลูกค้าประจำ",
    totalSpent: 120000,
    lastPurchase: "2023-06-25",
    status: "active",
  },
]

export default function CustomerDataTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [regionFilter, setRegionFilter] = useState("all")
  const [segmentFilter, setSegmentFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter customers based on search term and filters
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRegion = regionFilter === "all" || customer.region === regionFilter
    const matchesSegment = segmentFilter === "all" || customer.segment === segmentFilter
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter

    return matchesSearch && matchesRegion && matchesSegment && matchesStatus
  })

  return (
    <section id="customer-data">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">ตารางข้อมูลลูกค้า</h2>
          <p className="text-gray-600">ค้นหา กรอง และวิเคราะห์ข้อมูลลูกค้าได้อย่างง่ายดาย</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>ส่งออกข้อมูล</span>
          </Button>
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>ข้อมูลลูกค้า</CardTitle>
          <CardDescription>รายการลูกค้าทั้งหมดในระบบ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="ค้นหาตามชื่อ, อีเมล, หรือรหัสลูกค้า..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500">กรอง:</span>
              </div>
              <Select value={regionFilter} onValueChange={setRegionFilter}>
                <SelectTrigger className="w-[130px] h-9">
                  <SelectValue placeholder="ภูมิภาค" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ทุกภูมิภาค</SelectItem>
                  <SelectItem value="กรุงเทพฯ">กรุงเทพฯ</SelectItem>
                  <SelectItem value="เชียงใหม่">เชียงใหม่</SelectItem>
                  <SelectItem value="ภูเก็ต">ภูเก็ต</SelectItem>
                  <SelectItem value="ขอนแก่น">ขอนแก่น</SelectItem>
                </SelectContent>
              </Select>
              <Select value={segmentFilter} onValueChange={setSegmentFilter}>
                <SelectTrigger className="w-[130px] h-9">
                  <SelectValue placeholder="กลุ่มลูกค้า" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ทุกกลุ่ม</SelectItem>
                  <SelectItem value="ลูกค้าใหม่">ลูกค้าใหม่</SelectItem>
                  <SelectItem value="ลูกค้าประจำ">ลูกค้าประจำ</SelectItem>
                  <SelectItem value="ลูกค้า VIP">ลูกค้า VIP</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[130px] h-9">
                  <SelectValue placeholder="สถานะ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ทุกสถานะ</SelectItem>
                  <SelectItem value="active">ใช้งาน</SelectItem>
                  <SelectItem value="inactive">ไม่ได้ใช้งาน</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>รหัสลูกค้า</TableHead>
                  <TableHead>ชื่อ</TableHead>
                  <TableHead className="hidden md:table-cell">อีเมล</TableHead>
                  <TableHead className="hidden md:table-cell">ภูมิภาค</TableHead>
                  <TableHead>กลุ่มลูกค้า</TableHead>
                  <TableHead className="text-right">ยอดใช้จ่ายรวม</TableHead>
                  <TableHead className="hidden md:table-cell">สถานะ</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.id}</TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{customer.email}</TableCell>
                    <TableCell className="hidden md:table-cell">{customer.region}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          customer.segment === "ลูกค้า VIP"
                            ? "border-cyan-500 text-cyan-500"
                            : customer.segment === "ลูกค้าประจำ"
                              ? "border-green-500 text-green-500"
                              : "border-blue-500 text-blue-500"
                        }
                      >
                        {customer.segment}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{customer.totalSpent.toLocaleString()} บาท</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge
                        variant="outline"
                        className={
                          customer.status === "active"
                            ? "border-green-500 bg-green-50 text-green-500"
                            : "border-gray-500 bg-gray-50 text-gray-500"
                        }
                      >
                        {customer.status === "active" ? "ใช้งาน" : "ไม่ได้ใช้งาน"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">เปิดเมนู</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>การดำเนินการ</DropdownMenuLabel>
                          <DropdownMenuItem>ดูรายละเอียด</DropdownMenuItem>
                          <DropdownMenuItem>แก้ไขข้อมูล</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>ดูประวัติการซื้อ</DropdownMenuItem>
                          <DropdownMenuItem>วิเคราะห์พฤติกรรม</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">ลบข้อมูล</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              แสดง {filteredCustomers.length} จาก {customers.length} รายการ
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                1
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
