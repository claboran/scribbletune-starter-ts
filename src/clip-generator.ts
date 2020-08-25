import { clip, arp } from 'scribbletune';

export const createArpTestClip = () => clip({
    notes: arp('Cm-1 Fm-0'),
    subdiv: '16n',
    pattern: 'x-x-x'.repeat(32)
});
