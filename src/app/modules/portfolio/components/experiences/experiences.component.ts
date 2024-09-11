import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Analista de Métricas',
        p: 'Supersonic Marketing Digital | jun 2022 - mar 2023',
      },
      text: '<p>Principais atividades:</p> <p>- Coletar dados de uma variedade de fontes, incluindo sistemas de CRM, sistemas de BI e plataformas de mídia social;</p> <p>- Analisar dados para identificar tendências, padrões e oportunidades para melhorar o desempenho;</p> <p>- Desenvolver e implementar estratégias para melhorar o desempenho com base nos dados;</p> <p>- Trabalhar com outros departamentos para garantir que os dados sejam usados de forma eficaz.</p>',
    },
  ]);
}
