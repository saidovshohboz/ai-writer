import { Pencil } from 'lucide-react';
import PromptHistory from './prompt-history';
import { TPromptHistory } from '@/shared/types/prompt-history.type';

const mockItems: TPromptHistory[] = [
  {
    date: 'Today',
    links: [
      {
        title: 'Prompt 1',
        url: 'dashboard/prompt/1',
      },
      {
        title: 'Prompt 2',
        url: 'dashboard/prompt/2',
      },
    ],
  },
  {
    date: 'Yesterday',
    links: [
      {
        title: 'Prompt 1',
        url: 'dashboard/prompt/1',
      },
      {
        title: 'Prompt 2',
        url: 'dashboard/prompt/2',
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <nav className="h-screen w-80 border-r p-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">AI Writer</h1>
        <button>
          <Pencil size={20} />
        </button>
      </div>
      <PromptHistory items={mockItems} />
    </nav>
  );
}
