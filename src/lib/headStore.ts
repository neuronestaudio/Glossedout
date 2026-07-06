export interface HeadData {
  title: string;
  description: string;
  canonical: string;
  noindex: boolean;
  jsonLd: object[];
}

let activeStore: HeadData | null = null;

export function startCapture(): HeadData {
  activeStore = { title: '', description: '', canonical: '', noindex: false, jsonLd: [] };
  return activeStore;
}

export function endCapture(): void {
  activeStore = null;
}

export function recordHead(data: {
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
  jsonLd?: object[];
}): void {
  if (activeStore) {
    activeStore.title = data.title;
    activeStore.description = data.description;
    activeStore.canonical = data.canonical;
    activeStore.noindex = Boolean(data.noindex);
    activeStore.jsonLd = data.jsonLd ?? [];
  }
}
