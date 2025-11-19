import { ClipboardList, PenTool, FileStack, Camera, BadgeCheck, IdCard, FileText, Bell } from 'lucide-react'

const panels = [
  { title: 'Attendance', icon: Camera, items: ['Face/Fingerprint/RFID', 'Geo-fencing', 'Proxy detection', 'Analytics'] },
  { title: '75% Auto-Block', icon: ClipboardList, items: ['Auto lock for Engineering', 'Notify parent', 'Teacher/Admin override'] },
  { title: 'Online Classes', icon: PenTool, items: ['Pre-join attendance', 'AI focus detection', 'Live chat', 'Teacher controls'] },
  { title: 'Exam Portal', icon: FileStack, items: ['No chat/switch', 'Camera+Mic monitor', 'Auto-save', '3-level violations'] },
  { title: 'Certificates', icon: BadgeCheck, items: ['PDF/PNG', 'QR/Barcode', 'Share link', 'Auto-save'] },
  { title: 'ID Cards', icon: IdCard, items: ['Print-ready', 'QR/Barcode', 'Validity', 'Profile scan'] },
  { title: 'Resumes', icon: FileText, items: ['Upload/Update', 'View/Download', 'Approval & feedback'] },
  { title: 'Notifications', icon: Bell, items: ['Warnings', 'Notes', 'Exams', 'Study tips'] },
]

export default function PreviewPanels() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {panels.map(({ title, icon: Icon, items }) => (
          <div key={title} className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <ul className="list-disc pl-5 text-sm text-white/70 space-y-1">
              {items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
