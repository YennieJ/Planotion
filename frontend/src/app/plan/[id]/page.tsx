export default function PlanDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>계획 상세: {params.id}</h1>
      <p>계획 상세 정보가 표시됩니다.</p>
    </div>
  );
}
