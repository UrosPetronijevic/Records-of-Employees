type GroupsFormProps = {
  selectedType: string;
};

export default function GroupsForm({ selectedType }: GroupsFormProps) {
  return (
    <div className="w-[35%] bg-white flex flex-col p-1 items-center shadow-[4.0px_4.0px_4.0px_4.0px_rgba(0,0,0,0.18)] rounded-lg backdrop-blur-sm">
      <h1 className="text-5xl font-thin text-slate-700">GROUPS</h1>

      <div className="h-max w-full flex flex-col-reverse p-4">
        <form>{selectedType === "filijalaSakljucari" && <div></div>}</form>
      </div>
    </div>
  );
}
